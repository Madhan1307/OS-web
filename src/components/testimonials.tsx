import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WallOfLoveSection() {
  return (
    <section className=" py-16 md:py-32 ">
      <div className="@container mx-auto max-w-6xl px-8">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Everything You Need for Smarter Lead Generation
          </h2>
          <p className="mt-4 mx-auto max-w-lg">
            Outreach Sheet integrates seamlessly with Google Sheets, combining
            multiple tools into one intuitive solution
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          <div key={0} className="space-y-3 col-span-2">
            <Card key={0}>
              <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                <div>
                  <h3 className="font-bold text-lg">
                    Prospecting Made Effortless —Right in Google Sheets
                  </h3>
                  <blockquote className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      Identify and engage the right leads with Outreach Sheet’s
                      powerful prospecting tools. Extract data effortlessly and
                      gain the insights
                    </p>
                  </blockquote>
                  <div className="flex justify-end">
                    <Image src="/f-1.png" alt="Logo" width={200} height={200} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div key={1} className="space-y-3 ">
            <Card key={1}>
              <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                <div>
                  <h3 className="font-bold text-lg">Ideal Customer Profile</h3>
                  <blockquote className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      Identify and engage the right leads with Outreach Sheet’s
                      powerful prospecting tools.
                    </p>
                  </blockquote>
                  <div className="flex justify-end mt-4">
                    <Image src="/f-2.png" alt="Logo" width={200} height={200} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div key={2} className="space-y-3">
            <Card key={2}>
              <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                <div>
                  <h3 className="font-bold text-lg">Enrichment</h3>
                  <blockquote className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      Identify and engage the right leads with Outreach Sheet’s
                      powerful prospecting tools.
                    </p>
                  </blockquote>
                  <div className="flex justify-end mt-10 mb-4">
                    <Image src="/f-3.png" alt="Logo" width={200} height={200} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          <div key={4} className="space-y-3 ">
            <Card key={4}>
              <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                <div className="flex flex-col items-start gap-2 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34A853"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-badge-check-icon lucide-badge-check"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <h3 className="font-bold text-lg">Verification</h3>
                  <blockquote className="">
                    <p className="text-gray-700 dark:text-gray-300">
                      Identify and engage the right leads with Outreach Sheet’s
                      powerful prospecting tools.
                    </p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
          <div key={5} className="space-y-3">
            <Card key={5}>
              <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                <div className="flex flex-col items-start gap-2 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34A853"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-search-icon lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <h3 className="font-bold text-lg">Analysis / Research</h3>
                  <blockquote className="">
                    <p className="text-gray-700 dark:text-gray-300">
                      Identify and engage the right leads with Outreach Sheet’s
                      powerful prospecting tools.
                    </p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
          <div key={6} className="space-y-3 col-span-2">
            <Card key={6}>
              <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6 mt-3">
                <div className="flex gap-2">
                <div className="flex flex-col items-start gap-2 mt-4">
                  <h3 className="font-bold text-lg">Email Templates </h3>
                  <blockquote className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300 mt-4">
                      Identify and engage the right leads with Outreach Sheet’s
                      powerful prospecting tools. Extract data effortlessly and
                      gain the insights
                    </p>
                  </blockquote>
                  </div>
                  <div className="flex justify-end w-full">
                    <Image src="/f-6.png" alt="Logo" width={200} height={200} />
                  </div>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
