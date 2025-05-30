import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageHeader,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/ui/page-container";

const MedicosPage = () => {
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
          <Button>
            <Plus />
            Novo Médico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>Médicos</h1>
      </PageContent>
    </PageContainer>
  );
};

export default MedicosPage;
