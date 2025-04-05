import { AppSidebar } from "./components/app-sidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";

import { TrendingUp, MoveRight } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "./components/ui/button";
import { Separator } from "@radix-ui/react-separator";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="items-center justify-between sticky top-0 flex h-16 shrink-0 gap-2 border-b bg-background px-4">
          <div>
            <span className="text-base font-semibold text-white">
              Analytics
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-white p-2">
              Activity
            </span>
            <span className="text-base font-semibold text-white p-2">
              logout
            </span>
          </div>
        </header>
        <header className="items-center justify-between sticky top-0 flex h-16 shrink-0 gap-2 border-b bg-background px-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-white p-2">
              Overview
            </span>
            <span className="text-base font-semibold text-gray-500 p-2">
              Demographics
            </span>
          </div>
          <div>
            <span className="text-base font-semibold text-white p-2">More</span>
          </div>
        </header>
        <div className="m-10">
          <span className="text-5xl font-semibold text-white">Overview</span>
          <div className="flex gap-2">
            <Card>
              <CardHeader>
                <CardTitle>Line Chart - Linear</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="linear"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
            <Card className="w-[350px]">
              <CardHeader>
                <span className="text-2xl font-semibold">Insights</span>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <span className="text-2xl font-light leading-none">
                      Founders
                    </span>
                    <div className="flex gap-4 items-center">
                      <span className="text-5xl font-bold">7.4K</span>
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-green-400">+000%</span>
                        <span>(000)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <span className="text-2xl font-light leading-none">
                      Investors
                    </span>
                    <div className="flex gap-4 items-center">
                      <span className="text-5xl font-bold">6.09K</span>
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-green-400">+000%</span>
                        <span>(000)</span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4 border border-gray-400" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant={"ghost"}>
                  View detailed insights <MoveRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
