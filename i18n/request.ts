import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;

    return {
      messages,
      timeZone: 'UTC',
      now: new Date(),
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {
      messages: {},
      timeZone: 'UTC',
      now: new Date(),
    };
  }
});
