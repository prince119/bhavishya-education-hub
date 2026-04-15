import { ShieldCheck, MapPin } from "lucide-react";

interface FranchiseCardProps {
  name: string;
  location: string;
  authorized: boolean;
  authTitle: string;
  phone: string;
}

const FranchiseCard = ({ name, location, authorized, authTitle, phone }: FranchiseCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2 flex-1">
          <h3 className="font-heading font-bold text-lg text-foreground">{name}</h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin size={14} className="flex-shrink-0" />
            <span>{location}</span>
          </div>
          <p className="text-sm text-muted-foreground">{phone}</p>
        </div>
        {authorized && (
          <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0">
            <ShieldCheck size={14} />
            <span>Verified</span>
          </div>
        )}
      </div>
      <div className="mt-3 pt-3 border-t border-border">
        <p className="text-xs font-medium text-primary">{authTitle}</p>
      </div>
    </div>
  );
};

export default FranchiseCard;
