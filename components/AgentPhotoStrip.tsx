'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

export interface PhotoStripAgent {
  slug: string;
  name: string;
  role: string;
  desc: string;
  tags: string[];
}

/**
 * AgentPhotoStrip — 8 narrow vertical panels at rest; whichever one the
 * cursor is over expands wider (revealing more of the photo) while the
 * others compress. The expanded panel shows role badge + name + description
 * + capability tags overlaid on the photo — real data, same fields used
 * elsewhere on the site, not invented for this component.
 */
export function AgentPhotoStrip({ agents }: { agents: PhotoStripAgent[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex h-[420px] w-full gap-1.5 overflow-hidden rounded-token">
      {agents.map((agent, i) => {
        const isActive = active === i;
        return (
          <div
            key={agent.slug}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={cn(
              'relative flex-1 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
              isActive && 'flex-[4]'
            )}
          >
            <Image
              src={`/images/agents/${agent.slug}.jpg`}
              alt={agent.name}
              fill
              sizes="(max-width: 768px) 25vw, 20vw"
              className="object-cover"
              priority={i < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />

            {isActive ? (
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="font-mono-label inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm">
                  {agent.role.toUpperCase()}
                </span>
                <h3 className="font-display mt-2 text-2xl font-bold text-white">{agent.name}</h3>
                <p className="mt-2 text-sm text-white/85">{agent.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {agent.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl]">
                <span className="font-mono-label text-xs font-bold tracking-wide text-white">{agent.name.toUpperCase()}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
