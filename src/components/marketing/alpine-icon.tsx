import type { SVGProps } from "react";
import {
  CalendarClock,
  ChartNoAxesColumn,
  CheckCircle2,
  Compass,
  CreditCard,
  Flag,
  Handshake,
  Lightbulb,
  LucideIcon,
  Mail,
  Map,
  MessageSquareMore,
  Mountain,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
  CircleHelp,
  Video,
  Workflow
} from "lucide-react";

import type { AlpineIconName } from "@/content/site-content";
import { cn } from "@/lib/utils";

const icons: Record<AlpineIconName, LucideIcon> = {
  calendar: CalendarClock,
  chart: ChartNoAxesColumn,
  check: CheckCircle2,
  compass: Compass,
  "credit-card": CreditCard,
  flag: Flag,
  handshake: Handshake,
  lightbulb: Lightbulb,
  mail: Mail,
  map: Map,
  message: MessageSquareMore,
  mountain: Mountain,
  rocket: Rocket,
  shield: ShieldCheck,
  sparkles: Sparkles,
  store: Store,
  support: CircleHelp,
  tool: Wrench,
  video: Video,
  workflow: Workflow
};

type AlpineIconProps = SVGProps<SVGSVGElement> & {
  name: AlpineIconName;
};

export function AlpineIcon({ name, className, ...props }: AlpineIconProps) {
  const Icon = icons[name];

  return <Icon aria-hidden className={cn("h-5 w-5", className)} {...props} />;
}
