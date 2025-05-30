"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import UpsertMedicoForm from "./upsert-medico.form";

export const AddMedicoButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Novo Médico
        </Button>
      </DialogTrigger>
      <UpsertMedicoForm />
    </Dialog>
  );
};
