import { useToDoItems } from "../../hooks/useToDoItems";
import { getIconForTitle } from "../../lib/getIconForTitle";
import { ToDoListLoader } from "../Loader";
import Card from "./Card";
import InfoCard from "./InfoCard";

export function ToDoSection() {
    const { data: toDoItems, isLoading, isError } = useToDoItems();
  
    if (isLoading) return <ToDoListLoader />;
    if (isError) return <div>Failed to load To-Do items.</div>;
  
    return (
      <Card title="To-Do List">
        {toDoItems?.map(({ id, title, subtitle, iconBg, iconColor }) => (
          <InfoCard
            key={id}
            icon={getIconForTitle(title)!}
            title={title}
            subtitle={subtitle}
            iconBgClass={iconBg}
            iconColorClass={iconColor}
          />
        ))}
      </Card>
    );
  }