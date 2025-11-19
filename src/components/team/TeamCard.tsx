import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
};

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg text-center border">
      <div className="relative h-40 w-40 mx-auto mb-4">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold font-headline">{member.name}</h3>
      <p className="text-accent mb-4">{member.role}</p>
      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
      <Button variant="ghost" size="icon">
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Button>
    </div>
  );
}
