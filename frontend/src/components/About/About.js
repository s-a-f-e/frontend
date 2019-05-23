import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../simple-library';

const About = props => {
    //styles
    const aboutContainer = mobile => ({
      height: props.mobile ? '3800px' : '2500px',
      backgroundColor: 'f5f5f5',
      overflowY: 'scroll'
    })

    const bigBox = mobile => ({
      width: '80%',
      height: props.mobile ? '600px' : '400px',
      display: 'flex',
      flexDirection: props.mobile ? 'column' : 'row',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: props.mobile ? '10px 0' : '30px 0',
      borderRadius: '10px'
    })

    const body = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }

    const faq = mobile => ({
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      height: props.mobile ? '550px' : '400px',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: '30px 0',
      borderRadius: '10px',
      alignItems: 'center'
    })

    const header = mobile => ({
      width: props.mobile ? '100%' : '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: props.mobile ? 'center' : null
    })

    const header1 = mobile => ({
      width: props.mobile ? '100vw' : '50vw',
      color: '#4f6d7a',
      fontSize: props.mobile ? '50px' : '70px',
      textAlign: 'left',
      fontWeight: '700',
      backgroundColor: '#f5f5f5',
      padding: props.mobile ? '20px' : '30px 20px',
      margin: props.mobile ? '200px 0 0 0' : '300px 0 0 0',
      borderRadius: props.mobile ? null : '0 5px 5px 0'
    })

    const header2 = {
      width: '100%',
      color: '#4f6d7a',
      fontSize: '30px',
      textAlign: 'center',
      paddingBottom: '50px',
      fontWeight: '700',
      paddingTop: '20px'
    }

    const header3 = {
      fontSize: '20px',
      color: '#e89980'
    }

    const header4 = {
      fontSize: '25px',
      color: '#fff',
      width: '100%',
      textAlign: 'center'
    }

    const header5 = {
      fontSize: '20px',
      color: '#e89980'
    }

    const headerContainer = mobile => ({
      backgroundImage: 'url("https://images.unsplash.com/photo-1534470717-233b39a41c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      width: '100vw',
      height: props.mobile ? '500px' : '660px',
      opacity: '0.8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
    })

    const largeImage = {
      height: '100%',
      width: '100%',
      borderRadius: '5px'
    }

    const learnButton = {
      width: '20vw',
      height: '10vh',
      border: '2px solid white',
      borderRadius: '5px',
      backgroundColor: '#4f6d7a',
      fontSize: '17px',
      fontWeight: '500'
    }

    const learnMore = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '200px',
      backgroundColor: '#4f6d7a',
      paddingTop: '40px'
    }

    const link = {
      textDecoration: 'none',
      color: '#e89980'
    }

    const links = {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '10px'
    }

    const paragraph = {
      color: '#707070',
      padding: '10px 20px',
      textAlign: 'center'
    }

    const question = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0'
    }

    const secondary = mobile => ({
      width: props.mobile ? '100%' : '50%',
      marginTop: props.mobile ? '10px' : '0'
    })

    const team = mobile => ({
      display: 'flex',
      justifyContent: props.mobile ? null : 'space-around',
      flexDirection: props.mobile ? 'column' : null
    })

    const teamBox = mobile => ({
      width: '80%',
      height: props.mobile ? '1500px' : '400px',
      display: 'flex',
      flexDirection: 'column',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: props.mobile ? '10px 0' : '30px 0',
      borderRadius: '10px'
    })

    const teamImage = {
      height: '100px',
      width: '100px',
      border: '3px solid #4f6d7a',
      borderRadius: '50%',
      marginBottom: '20px'
    }

    const teamMember = mobile => ({
      width: props.mobile ? '100%' : '12%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: props.mobile ? '200' : null,
      padding: props.mobile ? '10px 0' : null
    })

    return (
      <Container about style={ aboutContainer(props.mobile) }>
              <div style={ headerContainer(props.mobile) }>
                <p style={ header1(props.mobile) }>We believe in supporting mothers.</p>
              </div>
              <div style={body}>
                <div style={ bigBox(props.mobile) }>
                  <div style={ header(props.mobile) }>
                    <p style={header2}>We know it's difficult.</p>
                      <p style={paragraph}>
                        Motherhood is one of the most difficult jobs in the world, and
                        we're here to help. Ride for Life provides easy, trustworthy
                        transportation for women in need. No need to worry about how to
                        get to the hospital. No need to worry about unqualified druvers.
                        Just arrange a ride, and relax.
                      </p>
                  </div>
                  <div style={ secondary(props.mobile) }>
                    <img
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80"
                      alt="children"
                      style={largeImage}
                    />
                  </div>
                </div>
                <div style={ bigBox(props.mobile) }>
                  <div style={ secondary(props.mobile) }>
                    <img
                      src="https://images.unsplash.com/photo-1535950377798-a33c56f5dd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                      alt="tuktuk"
                      style={largeImage}
                    />
                  </div>
                  <div style={ header(props.mobile) }>
                    <p style={header2}>Our drivers are trained professionals.</p>
                    <p style={paragraph}>
                      Each of our drivers goes through a rigorous defensive and
                      offensive driving course, as well as basic first aid and CPR. Each
                      one of our drivers has been vetted by our organization. You'll
                      never be getting into an ambulance with a stranger. You'll be
                      getting into an ambulance with family.
                    </p>
                  </div>
                </div>
                <div style={ teamBox(props.mobile) }>
                  <p style={header2}>Our Team</p>
                  <div style={ team(props.mobile) }>
                    <div style={ teamMember(props.mobile) }>
                      <img
                        src="https://image.flaticon.com/icons/svg/1154/1154456.svg"
                        alt="mandi"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Mandi Hamza
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={ teamMember(props.mobile) }>
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145859.svg"
                        alt="terry"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Terry Gleason
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={ teamMember(props.mobile) }>
                      <img
                        src="https://image.flaticon.com/icons/svg/701/701996.svg"
                        alt="gil"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Gil Olsen
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={ teamMember(props.mobile) }>
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145848.svg"
                        alt="douglas"
                        style={teamImage}
                      />
                      <p style={header3}>Douglas Jordan</p>
                      <p style={paragraph}>Front End Development</p>
                    </div>
                    <div style={ teamMember(props.mobile) }>
                      <img
                        src="https://image.flaticon.com/icons/svg/702/702011.svg"
                        alt="claire"
                        style={teamImage}
                      />
                      <p style={header3}>Claire Sinozich</p>
                      <p style={paragraph}>Front End Development</p>
                    </div>
                    <div style={ teamMember(props.mobile) }>
                      <img
                        src="https://image.flaticon.com/icons/svg/498/498367.svg"
                        alt="lee"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Lee Tann
                      </p>
                      <p style={paragraph}>Back End Development</p>
                    </div>
                    <div style={ teamMember(props.mobile) }>
                      <img
                        src="https://image.flaticon.com/icons/svg/219/219974.svg"
                        alt="kyran"
                        style={teamImage}
                      />
                      <p style={header3}>Kyran McCann</p>
                      <p style={paragraph}>Project Lead</p>
                    </div>
                  </div>
                </div>
                <div style={ faq(props.mobile) }>
                  <p style={header2}>FAQ</p>
                  <div style={question}>
                    <p style={header5}>How do I sign up?</p>
                    <p style={paragraph}>
                      If you don't have an account yet, sign up <Link to='/signup' style={link}>here</Link> as a driver,
                      mother, or caregiver. If you do have an account, head <Link to='login' style={link}>here </Link> to log
                      in.
                    </p>
                  </div>
                  <div style={question}>
                    <p style={header5}>
                      How do I pay for the rides? How do I get paid for being a driver?
                    </p>
                    <p style={paragraph}>
                      All payments for Ride for Life are handled off-app. Call for more
                      details.
                    </p>
                  </div>
                  <div style={question}>
                    <p style={header5}>Can I schedule a ride in advance?</p>
                    <p style={paragraph}>
                      Unfortunately, we don't have this feature right now! Check back
                      soon for more.
                    </p>
                  </div>
                </div>
                <div style={learnMore}>
                  <p style={header4}>Learn More</p>
                  <div style={links}>
                    <a href='https://loving-curran-d1a71f.netlify.com/'><Button style={learnButton}>Mandi Hamza</Button></a>
                    <a href="https://jolly-northcutt-3df032.netlify.com/"><Button style={learnButton}>Gil Olsen</Button></a>
                    <a href="https://loving-panini-7deb78.netlify.com/"><Button style={learnButton}>Terry Gleason</Button></a>
                  </div>
                </div>
              </div>
      </Container>
    )
}

export default About;