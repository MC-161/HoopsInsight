import WidgetWrapper from "@/components/Widget/WidgetWrapper";
import { Button } from "@/components/ui/button";
const ToolsWidget = () => {
  return (
    <WidgetWrapper className="lg:h-[540px] shadow-sm shadow-zinc-50">
      <p className="title font-semibold px-4 pt-2 text-sm">Tools</p>
      <div className="tools flex lg:flex-col gap-2">
        <section className="comparison flex flex-col gap-1">
          <p className="title text-xs px-4 ">Comparison</p>
          <p className="text-xs font-extralight px-4 ">Try out our comparison tool find out who really is better</p>
          <div className="pt-1 px-3 ">
            <img className="toolImg h-32 w-full border-[1px] rounded-md" src="" alt="" />
          </div>
          <Button className=" bg-transparent hover:bg-primary-logo mt-2 border-2 self-center text-xs w-24 h-8 mb-3">Chat</Button>
        </section>
        <section className="comparison flex flex-col gap-1">
          <p className="title text-xs px-4 ">Comparison</p>
          <p className="text-xs font-extralight px-4 ">Try out our comparison tool find out who really is better</p>
          <div className="pt-1 px-3 ">
            <img className="toolImg h-32 w-full border-[1px] rounded-md" src="" alt="" />
          </div>
          <Button className=" bg-transparent hover:bg-primary-logo mt-2 border-2 self-center text-xs w-24 h-8 mb-3">Chat</Button>
        </section>
      </div>
    </WidgetWrapper>
  );
}
 
export default ToolsWidget;