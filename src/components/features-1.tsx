import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Users,
  UserSearch,
  MailPlus,
  BadgeCheck,
} from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section id="features" className=" py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Features
          </h2>
          <p className="mt-4">
            Specify helps you gain control of your design system across teams
            and products.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-4 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <UserSearch color="#34A853" className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-3 font-semibold text-lg">Prospecting</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Identify and engage the right leads with tools like single-page
                crawls, multi-page crawls, and LinkedIn extraction—all within
                Google Sheets.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Users color="#34A853" className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-3 font-semibold text-lg">Persona Targeting</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Tailor your marketing efforts to specific audience segments to
                improve engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <MailPlus color="#34A853" className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-3 font-semibold text-lg">Enrichment</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Extract email addresses from LinkedIn profiles and enrich your
                data directly in Google Sheets..
              </p>
            </CardContent>
          </Card>
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BadgeCheck color="#34A853" className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-3 font-semibold text-lg">Verification</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Validate email addresses to reduce bounce rates and improve
                campaign effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
