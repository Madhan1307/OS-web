import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing
          </h1>
          <p>
            Specify helps you gain control of your design system across teams
            and products.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Free</CardTitle>
              <span className="my-3 block text-2xl font-semibold">$59 / month</span>
              <CardDescription className="text-sm">Per editor</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Basic Analytics Dashboard",
                  "5GB Cloud Storage",
                  "Email and Chat Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative">
            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Popular
            </span>

            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">Pro</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  $99 / month
                </span>
                <CardDescription className="text-sm">
                  Per editor
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {[
                    "Everything in Free Plan",
                    "5GB Cloud Storage",
                    "Email and Chat Support",
                    "Access to Community Forum",
                    "Single User Access",
                    "Access to Basic Templates",
                    "Mobile App Access",
                    "1 Custom Report Per Month",
                    "Monthly Product Updates",
                    "Standard Security Features",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Startup</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $159 / month
              </span>
              <CardDescription className="text-sm">Per editor</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Everything in Pro Plan",
                  "5GB Cloud Storage",
                  "Email and Chat Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
