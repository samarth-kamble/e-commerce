import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>Click Me</Button>
        </div>
        <div>
          <Input placeholder="I am an input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea placeholder="I am a textarea" />
        </div>
        <div>
          <Checkbox /> Checked
        </div>
      </div>
    </div>
  );
};

export default Page;
