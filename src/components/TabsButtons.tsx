import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";

const tabs = [
  {
    name: "experience",
    content: "Experience",
  },
  {
    name: "skills",
    content: "Skills",
  },
  {
    name: "about",
    content: "About",
  },
];

const TabsButtons = (props: any) => {
  return (
    <Tabs defaultValue="experience" className="w-full ">
      <TabsList
        className={"bg-white dark:bg-n700  w-full px-2 py-8 rounded-xl"}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.name}
            className={
              "w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme"
            }
            value={tab.name}
          >
            {tab.content}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.name} value={tab.name}>
          {props[tab.name]}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsButtons;
