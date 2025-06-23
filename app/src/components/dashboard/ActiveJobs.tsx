import ActiveJobItem from "./ActiveJobItem";
import { useActiveJobs } from "../../hooks/useActiveJobs";
import Card from "./Card";
import { ActiveJobsLoader } from "../Loader";

export function ActiveJobsSection() {
    const { data: activeJobs, isLoading, isError } = useActiveJobs();
  
    if (isLoading) return <ActiveJobsLoader />;
    if (isError) return <div>Failed to load Active Jobs.</div>;
  
    return (
      <Card title="Top Active Jobs" actionText="See all">
        {activeJobs?.map(job => (
          <ActiveJobItem
            key={job.id}
            title={job.title}
            candidates={job.candidates}
            inPipeline={job.inPipeline}
            daysOpen={job.daysOpen}
            progress={job.progress}
          />
        ))}
      </Card>
    );
  }