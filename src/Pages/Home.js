import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Timeline from '../Components/TimeLine/TimeLine'
import graduacion from "../Images/Graduacion.png"
import "./Home.css"
import TimeLineExperience from '../Components/TimeLine/TimeLineExperience'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import scared from "../Images/Scared.jpeg"
import frog from "../Images/frog.png"
import shooter from "../Images/shooter.png"
import gif from "../Images/gifs.png"
import pokedesk from "../Images/pokedesk.png"
import cubigHunting from "../Images/CubigHunting.jpeg"
import Modal from '@mui/material/Modal';
import languages from "../Images/languages.png"
import programing from "../Images/programing.jpg"
import databases from "../Images/databases.jpg"
import operatyingSystems from "../Images/operantingSystems.jpg"
import tools from "../Images/tools.png"
import map from "../Images/mapa.png"
import ContactForm from '../Components/ContactForm/ContactForm'
import CV from "../Documents/CV BORIS CAIZA EN.pdf"
import CVES from "../Documents/CV Boris Javier Caiza.pdf"
import fps from "../Documents/fps movil.apk"
import frogApp from "../Documents/Frog.apk"


export default function Inicio() {
  const { t } = useTranslation();

  const [openLanguajes, setOpenLanguages] = React.useState(false);
  const handleOpenLangaujes = () => setOpenLanguages(true);
  const handleCloseLangaujes = () => setOpenLanguages(false);


  /*-------------*/

  const [openPrograming, setOpenprograming] = React.useState(false);
  const handleOpenPrograming = () => setOpenprograming(true);
  const handleClosePrograming = () => setOpenprograming(false);


  /*----------------- */

  const [openDataBases, setOpenDataBases] = React.useState(false);
  const handleOpenDataBases = () => setOpenDataBases(true);
  const handleCloseDataBases = () => setOpenDataBases(false);

  /*----------------------------*/


  const [openOperatyngSystem, setOpenOperatyngSystem] = React.useState(false);
  const handleOpenOperatyngSystem = () => setOpenOperatyngSystem(true);
  const handleCloseOperatyngSystem = () => setOpenOperatyngSystem(false);

  /*----------------------------------*/


  const [openTools, setOpenTools] = React.useState(false);
  const handleOpenTools = () => setOpenTools(true);
  const handleCloseTools = () => setOpenTools(false);


  /*---------------------------------*/

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className='container-fluid up'>
      <div className='row justify-content-center center'  id="aboutMe">
        <div className='mt-5'  id="aboutMe">
        </div>
        <div className='col-sm-4'>
          <img src={graduacion} alt='graduacion' />
        </div>
        <div  className='col-sm-4'>
          <h2>{t('aboutMe.title')}</h2>
          <p>{t('aboutMe.paragraph1')}</p>
          <p>{t('aboutMe.paragraph2')}</p>
          <a className = "mt-3" href={CV} download><button type="button" class="btn btn-dark">{t('aboutMe.downloadCV')}</button></a> <br/> <br/>
          <a className = "mt-3" href={CVES} download><button type="button" class="btn btn-dark">{t('aboutMe.downloadCVES')}</button></a>
        </div>
      </div>
      <div className='mt-5' id="education">
      </div>
      <div className='row justify-content-center center up' >
        <div className='col-sm-4'>
          <h2>{t('education.title')}</h2>
          <Timeline />
        </div>
        <div className='col-sm-4'>
          <h2>{t('workExperience.title')}</h2>
          <TimeLineExperience />
        </div>
      </div>
      <div className='mt-5' id="skills">
      </div>
      <div className='row justify-content-center up'>
        <h2>{t('skills.title')}</h2>
        <div className='col-sm-4 mt-5'>
          <h2>{t('skills.languages.title')}</h2>
          <img src={languages} className='img-fluid img-languaje' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenLangaujes}>{t('skills.languages.lookButton')}</button>
          <Modal
            open={openLanguajes}
            onClose={handleCloseLangaujes}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {t('skills.languages.modalTitle')}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>{t('skills.languages.spanish')}</li>
                  <li>{t('skills.languages.english')}</li>
                </ul>
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className='col-sm-4 mt-5'>
          <h2>{t('skills.programming.title')}</h2>
          <img src={programing} className='img-fluid img-programing' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenPrograming}>{t('skills.programming.lookButton')}</button>
          <Modal
            open={openPrograming}
            onClose={handleClosePrograming}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {t('skills.programming.modalTitle')}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>{t('skills.programming.javascript')}</li>
                  <li>{t('skills.programming.java')}</li>
                  <li>{t('skills.programming.python')}</li>
                  <li>{t('skills.programming.csharp')}</li>
                  <li>{t('skills.programming.php')}</li>
                  <li>{t('skills.programming.typescript')}</li>
                  <li>{t('skills.programming.golang')}</li>
                </ul>
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className='col-sm-4 mt-5'>
          <h2>{t('skills.databases.title')}</h2>
          <img src={databases} className='img-fluid img-databases' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenDataBases}>{t('skills.databases.lookButton')}</button>
          <Modal
            open={openDataBases}
            onClose={handleCloseDataBases}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {t('skills.databases.modalTitle')}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>{t('skills.databases.mysql')}</li>
                  <li>{t('skills.databases.sqlServer')}</li>
                  <li>{t('skills.databases.postgresql')}</li>
                  <li>{t('skills.databases.mongodb')}</li>
                  <li>{t('skills.databases.firebase')}</li>
                </ul>
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className='col-sm-4 mt-5'>
          <h2>{t('skills.operatingSystem.title')}</h2>
          <img src={operatyingSystems} className='img-fluid img-operatyngSystems' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenOperatyngSystem}>{t('skills.operatingSystem.lookButton')}</button>
          <Modal
            open={openOperatyngSystem}
            onClose={handleCloseOperatyngSystem}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {t('skills.operatingSystem.modalTitle')}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>{t('skills.operatingSystem.windows')}</li>
                  <li>{t('skills.operatingSystem.linux')}</li>
                </ul>
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className='col-sm-4 mt-5'>
          <h2>{t('skills.tools.title')}</h2>
          <img src={tools} className='img-fluid img-operatyngSystems' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenTools}>{t('skills.tools.lookButton')}</button>
          <Modal
            open={openTools}
            onClose={handleCloseTools}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {t('skills.tools.modalTitle')}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>{t('skills.tools.powerBI')}</li>
                  <li>{t('skills.tools.docker')}</li>
                  <li>{t('skills.tools.angularJS')}</li>
                  <li>{t('skills.tools.reactJS')}</li>
                  <li>{t('skills.tools.nodeJS')}</li>
                  <li>{t('skills.tools.unity')}</li>
                  <li>{t('skills.tools.flask')}</li>
                  <li>{t('skills.tools.reactnative')}</li>
                  <li>{t('skills.tools.springBoot')}</li>
                  <li>{t('skills.tools..netFramework')}</li>
                </ul>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
      <div className='mt-5' id ="projects">
      </div>
      <div className='row justify-content-center up'>
        <h2>{t('projects.title')}</h2>
        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={scared}
              title="Sleender Game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('projects.slenderGame.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('projects.slenderGame.description')}
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/slender"><Button size="small">{t('projects.slenderGame.playBrowser')}</Button></a>
              <a href='#' download><Button size="small">{t('projects.slenderGame.downloadApk')}</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={frog}
              title="Frog Harvesting"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('projects.frogHarvesting.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('projects.frogHarvesting.description')}
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/frogharvesting"><Button size="small">{t('projects.frogHarvesting.playBrowser')}</Button></a>
              <a href={frogApp} download><Button size="small">{t('projects.frogHarvesting.downloadApk')}</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={shooter}
              title="Shooter Game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('projects.shooter.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('projects.shooter.description')}
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/shooter"><Button size="small">{t('projects.shooter.playBrowser')}</Button></a>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={gif}
              title="Gif Search"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('projects.gifSearch.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('projects.gifSearch.description')}
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://sad-montalcini-1dbbb9.netlify.app/"><Button size="small">{t('projects.gifSearch.tryBrowser')}</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={pokedesk}
              title="PokedDesk"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('projects.pokedesk.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('projects.pokedesk.description')}
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://roaring-figolla-5c6c6e.netlify.app/pokemons"><Button size="small">{t('projects.pokedesk.tryBrowser')}</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={cubigHunting}
              title="Cubig Hunting"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('projects.cubigHunting.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('projects.cubigHunting.description')}
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/shootred"><Button size="small">{t('projects.cubigHunting.playBrowser')}</Button></a>
              <a href={fps} download><Button size="small">{t('projects.cubigHunting.downloadApk')}</Button></a>
            </CardActions>
          </Card>
        </div>
        <div className='row justify-content-center'>
        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={map}
              title="Map Application"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {t('projects.mapApp.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('projects.mapApp.description')}
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://64372d787a124304031564cf--lustrous-tulumba-b5e19a.netlify.app/"><Button size="small">{t('projects.mapApp.tryBrowser')}</Button></a>
            </CardActions>
          </Card>
        </div>
        </div>
      </div>
      <div className='mt-5' id="contacto">
      </div>
      <div className='row justify-content-center up'>
        <h2>{t('contact.title')}</h2>
        <ContactForm/>
      </div>

    </div>
  )
}