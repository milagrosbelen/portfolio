import { cn } from '../lib/utils'

const tools = [
  { name: 'HTML', src: '/icons/html5.svg' },
  { name: 'CSS', src: '/icons/css3.svg' },
  { name: 'JavaScript', src: '/icons/javascript.svg' },
  { name: 'TypeScript', src: '/icons/typescript.svg' },
  { name: 'React', src: '/icons/react.svg' },
  { name: 'Next.js', src: '/icons/nextdotjs.svg' },
  { name: 'Tailwind CSS', src: '/icons/tailwindcss.svg' },
  { name: 'PHP', src: '/icons/php.svg' },
  { name: 'Laravel', src: '/icons/laravel.svg' },
  { name: 'Node.js', src: '/icons/nodedotjs.svg' },
  { name: 'C#', src: '/icons/csharp.svg' },
  { name: 'PostgreSQL', src: '/icons/postgresql.svg' },
  { name: 'Git', src: '/icons/git.svg' },
  { name: 'GitHub', src: '/icons/github.svg' },
  { name: 'Vite', src: '/icons/vite.svg' },
]

export function TechMarks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-3', className)}>
      {tools.map((tool) => (
        <li key={tool.name}>
          <span
            role="img"
            aria-label={tool.name}
            title={tool.name}
            className="block h-4 w-4 opacity-70"
            style={{
              backgroundColor: '#c4b5fd',
              WebkitMask: `url(${tool.src}) center / contain no-repeat`,
              mask: `url(${tool.src}) center / contain no-repeat`,
            }}
          />
        </li>
      ))}
    </ul>
  )
}
