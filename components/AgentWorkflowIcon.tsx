import {
  PhoneIncoming,
  MessageCircleQuestion,
  ClipboardList,
  CalendarClock,
  CircleCheck,
  Users2,
  HandCoins,
  HeartHandshake,
  ListChecks,
  Network,
  Star,
  FileScan,
} from 'lucide-react';

const iconMap = {
  PhoneIncoming,
  MessageCircleQuestion,
  ClipboardList,
  CalendarClock,
  CircleCheck,
  Users2,
  HandCoins,
  HeartHandshake,
  ListChecks,
  Network,
  Star,
  FileScan,
} as const;

export type AgentWorkflowIconName = keyof typeof iconMap;

export function AgentWorkflowIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name as AgentWorkflowIconName] ?? ClipboardList;
  return <Icon className={className ?? 'h-4 w-4'} />;
}
