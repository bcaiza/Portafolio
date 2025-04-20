import styled from '@emotion/styled';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import HotelIcon from '@mui/icons-material/Hotel';
import ComputerIcon from '@mui/icons-material/Computer';
export default function TimeLineExperience() {

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
            {t('experience.timeline.positions.itIntern')}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {t('experience.timeline.companies.hotelQuito')}
            </Typography>
            <Typography>{t('experience.timeline.dates.hotelQuito')}</Typography>
            <Typography>{t('experience.timeline.skills.hotelQuito')}</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {t('experience.timeline.positions.dataAnalystIntern')}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {t('experience.timeline.companies.caf')}
            </Typography>
            <Typography>{t('experience.timeline.dates.caf')}</Typography>
            <Typography>{t('experience.timeline.skills.caf')}</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {t('experience.timeline.positions.backEndDeveloper')}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {t('experience.timeline.companies.virtusProject')}
            </Typography>
            <Typography>{t('experience.timeline.dates.virtusProject')}</Typography>
            <Typography>{t('experience.timeline.skills.virtusProject')}</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {t('experience.timeline.positions.developer')}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {t('experience.timeline.companies.laCompetencia')}
            </Typography>
            <Typography>{t('experience.timeline.dates.laCompetencia')}</Typography>
            <Typography>{t('experience.timeline.skills.laCompetencia')}</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}