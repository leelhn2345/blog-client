import { HtmlHTMLAttributes } from "react";
import { Badge } from "./ui/badge";

export enum PermissionLevels {
  MEMBER = "member",
  ADMIN = "admin",
  ALPHA = "alpha",
}
interface Props extends HtmlHTMLAttributes<HTMLElement> {
  permission: PermissionLevels;
}

export function PermissionBadge({ className, permission }: Props) {
  return <Badge className={className}>{permission}</Badge>;
}
