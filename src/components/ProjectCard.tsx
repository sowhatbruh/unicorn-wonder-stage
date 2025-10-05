import { LucideIcon } from 'lucide-react';
import { Card } from './ui/card';

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  href?: string;
}

const ProjectCard = ({ icon: Icon, title, description, href }: ProjectCardProps) => {
  const CardContent = (
    <Card className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
      <div className="p-6 flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default ProjectCard;
