import React from 'react'
import { UpcomingInterviewsLoader } from '../Loader';
import { useUpcomingInterviews } from '../../hooks/useUpcomingInterviews';
import InterviewItem from './InterviewItem';
import getIconForInterview from '../../lib/getIconForInterview';
import Card from './Card';

export default function Interview() {
    const { data: interviews, isLoading, isError } = useUpcomingInterviews();
    if (isLoading) return <UpcomingInterviewsLoader />;
    if (isError) return <div>Failed to load interviews.</div>;
    return (
        <Card title="Upcoming Interviews" actionText="See all">
            {interviews?.map(({ time, candidate, type }, idx) => (
                <InterviewItem
                    key={`${time}-${idx}`}
                    time={time}
                    candidate={candidate}
                    type={type}
                    icon={getIconForInterview(type)}
                />
            ))}
        </Card>
    )
}
