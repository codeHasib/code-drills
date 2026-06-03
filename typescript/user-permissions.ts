type Role = "admin" | "moderator" | "user";

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  role: Role;
};

function canDeleteProject(params: User): boolean {
  if (params.role === "admin") return true;
  else return false;
}

function canCreateWorkSpace(params: User): boolean {
  if (params.role === "admin") return true;
  else return false;
}

function canInviteMembers(params: User): boolean {
  if (params.role === "admin" || params.role === "moderator") return true;
  else return false;
}
