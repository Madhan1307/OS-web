import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Everything You Need for Smarter Lead Generation
          </h2>
          <p>
            Outreach Sheet integrates seamlessly with Google Sheets, combining
            multiple tools into one intuitive solution{" "}
          </p>
        </div>

        <div className="relative mx-auto grid  divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-7" />
              <h3 className="text-sm font-medium">
                Prospecting Made Effortless —Right in Google Sheets
              </h3>
            </div>
            <p className="text-sm">
              Identify and engage the right leads with Outreach Sheet’s powerful
              prospecting tools. Extract data effortlessly and gain the insights
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Ideal Customer Profile</h3>
            </div>
            <p className="text-sm">
              Create a tailored ideal customer profile to identify and engage
              the right leads.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />

              <h3 className="text-sm font-medium">Enrichment</h3>
            </div>
            <p className="text-sm">
              Enrich your leads with real-time data and insights, streamlining
              your sales process.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />

              <h3 className="text-sm font-medium">Verification</h3>
            </div>
            <p className="text-sm">
              Verify the accuracy of your leads with real-time data and insights.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />

              <h3 className="text-sm font-medium">Analysis / Research</h3>
            </div>
            <p className="text-sm">
              Analyze and research your leads to gain insights and make better decisions.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Email Templates</h3>
            </div>
            <p className="text-sm">
              Create and customize email templates to engage your leads effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
