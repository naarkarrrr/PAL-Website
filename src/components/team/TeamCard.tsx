
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
};

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg text-center border h-full flex flex-col">
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
      <p className="text-muted-foreground text-sm mb-4 flex-grow">{member.bio}</p>
      <div className="flex justify-center gap-2 mt-auto">
        {member.socials?.linkedin && (
          <Button asChild variant="ghost" size="icon">
            <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        )}
        {member.socials?.facebook && (
          <Button asChild variant="ghost" size="icon">
             <Link href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </Button>
        )}
        {member.socials?.instagram && (
          <Button asChild variant="ghost" size="icon">
            <Link href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
