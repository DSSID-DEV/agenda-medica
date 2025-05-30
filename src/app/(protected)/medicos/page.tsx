import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageActions,
  PageContainer,
  PageContent,
  PageHeader,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

import { AddMedicoButton } from "./_components/add-medico-button";

const MedicosPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageHeaderTitle>Medicos</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie os médicos cadastrados na plataforma
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageActions>
          <AddMedicoButton />
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>Médicos</h1>
      </PageContent>
    </PageContainer>
  );
};

export default MedicosPage;
