import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

export default function TimelineP() {
  const { t } = useTranslation();

  return (
    <div className='mt-4'>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {t('timeline.university')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {t('timeline.institution')}
          </Typography>
          <Typography>{t('timeline.degree')}</Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>

    </div>
  );
}