import mixpanel from 'mixpanel-browser';

interface MixpanelPeople {
  set: (userProperties: Record<string, any>) => void;
}

interface OverridedMixpanel {
  track: (eventName: string, properties?: Record<string, any>) => void;
  track_pageview: () => void;
  identify: (userId: string) => void;
  people: MixpanelPeople;
  reset: () => void;
}

let mixpanelInstance: OverridedMixpanel | null = null;

const createNoopMixpanel = (): OverridedMixpanel => ({
  track: () => {},
  track_pageview: () => {},
  identify: () => {},
  people: { set: () => {} },
  reset: () => {},
});

const initMixpanel = (): OverridedMixpanel => {
  if (typeof window === "undefined") {
    return createNoopMixpanel();
  }

  try {
    if (!(window as any).__MIXPANEL_INITIALIZED__) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "", {
        debug: process.env.NODE_ENV === "development",
        track_pageview: true,
        persistence: "localStorage",
        api_host: "/mp",
        ignore_dnt: true,
        secure_cookie: true,
      });
      (window as any).__MIXPANEL_INITIALIZED__ = true;
    }
    return mixpanel as unknown as OverridedMixpanel;
  } catch (error) {
    console.error("Failed to initialize Mixpanel:", error);
    return createNoopMixpanel();
  }
};

export const getMixpanel = (): OverridedMixpanel => {
  if (!mixpanelInstance) {
    mixpanelInstance = initMixpanel();
  }
  return mixpanelInstance;
};

// Utility functions for common tracking operations
export const trackPageView = () => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.track_pageview();
    } catch (error) {
      console.error('Failed to track pageview:', error);
    }
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.track(eventName, properties);
    } catch (error) {
      console.error(`Failed to track event ${eventName}:`, error);
    }
  }
};

export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.identify(userId);
      if (userProperties) {
        mp.people.set(userProperties);
      }
    } catch (error) {
      console.error('Failed to identify user:', error);
    }
  }
};

export const resetUser = () => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.reset();
    } catch (error) {
      console.error('Failed to reset user:', error);
    }
  }
};
