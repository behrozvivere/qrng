import { useTranslations } from "next-intl";
import { CommonControlProps, QrbtfRendererCommonProps } from ".";

type CommonParamsType = CommonControlProps<QrbtfRendererCommonProps>;

export function useCommonParams() {
  const tCommon = useTranslations("qrcodes.common");
  const commonParams: CommonParamsType[] = [
    {
      type: "select",
      name: "correct_level",
      label: tCommon("correctLevel.label"),
      desc: tCommon("correctLevel.description"),
      config: {
        values: [
          {
            value: "low",
            label: "7%",
          },
          {
            value: "medium",
            label: "15%",
          },
          {
            value: "quartile",
            label: "25%",
          },
          {
            value: "high",
            label: "30%",
          },
        ],
      },
    },
  ];
  return {
    commonParams,
  };
}
