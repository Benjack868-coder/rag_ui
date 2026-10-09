import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const criteria = [
  {
    title: "Immediate threat or danger",
    description:
      "Content that includes credible threats of violence, self-harm, or harm to others.",
  },
  {
    title: "Illegal activity",
    description:
      "Content related to illegal goods, weapons, or organized crime.",
  },
  {
    title: "High-risk or sensitive content",
    description:
      "Such as child exploitation, terrorism, or non-consensual intimate imagery.",
  },
  {
    title: "Repeated violations",
    description:
      "Users who continue to post policy-violating content after warnings.",
  },
  {
    title: "Complex cases",
    description:
      "When there is uncertainty about the policy, or the content may require legal or specialized review.",
  },
];

export function AssistantResponse() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="p-4 sm:p-5">
        <p className="mb-4 text-sm leading-6 text-[#172f52]">
          A moderator should escalate a case when it meets any of the
          following criteria:
        </p>

        <ol className="space-y-3 text-sm leading-6">
          {criteria.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="shrink-0 text-slate-600">
                {criteria.indexOf(item) + 1}.
              </span>
              <p>
                <strong className="font-semibold text-[#142d50]">
                  {item.title}
                </strong>
                <span className="text-slate-600">
                  {" "}— {item.description}
                </span>
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-5 text-sm leading-6 text-[#172f52]">
          Escalation ensures that these cases are reviewed by the
          appropriate team for further investigation and action, in
          accordance with the applicable escalation procedures and
          moderation policies.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="border-emerald-200 bg-emerald-50 text-[11px] text-emerald-700"
          >
            ✓ Answer based on 2 sources
          </Badge>

          <Badge className="bg-emerald-100 text-[11px] text-emerald-700 hover:bg-emerald-100">
            Confidence: 92%
          </Badge>

          <span className="ml-auto text-[11px] text-slate-400">
            10:24 AM
          </span>
        </div>
      </CardContent>
    </Card>
  );
}