import React from 'react'

import Header from '../../features/Header'
import Hero from '../../features/Hero'
import Footer from '../../features/Footer'

import Container from '../../containers/Container'
import GridContainer from '../../containers/GridContainer'
import FlexContainer from '../../containers/FlexContainer'

import Layout from '../../layouts/Layout'
import TwoUp from '../../layouts/TwoUp'
import SingleWithSidebar from '../../layouts/SingleWithSidebar'
import SixtyFourty from '../../layouts/SixtyFourty'

import Card from '../../components/Card'

import Button from '../../basics/Button'
import Image from '../../basics/Image'
import Spacer from '../../basics/Spacer'
import Heading from '../../basics/Heading'
import Tag from '../../basics/Tag'

function Sandbox({}) {
  return (
    <Layout>
      <Header
        navItems={[
          { title: 'About' },
          { title: 'Careers' },
          { title: 'Locations' },
          { title: 'Blog' },
          { title: 'Resource Center' },
          { title: 'Security & Privacy' }
        ]}
        condensed={true}
      />
      <Header
        navItems={[
          { title: 'Business Banking' },
          { title: 'Private Wealth' },
          { title: 'Bank & Credit Union Consulting' }
        ]}
        cta={<Button>Contact Us</Button>}
      />

      <Hero
        title="Viral small batch snackwave"
        backgroundImage="https://picsum.photos/2000/1200/?blur"
        className="mt-xl"
        fullScreen={false}
        content={
          <p>
            Farm-to-table austin helvetica four loko, gochujang keffiyeh cred selfies direct trade
            woke chillwave keytar succulents sartorial. Brooklyn snackwave sartorial kale chips,
            mixtape tofu
          </p>
        }
      >
        <Button size="large" icon="chevron-right">
          Take some action now!
        </Button>
      </Hero>

      <Spacer />

      <Container>
        <TwoUp className="mt-xl">
          <div className="pr-xl display-flex justify-content-start flex-dir-col">
            <h1>Two Up Example</h1>
            <p>
              The rational model is based on a rationalist philosophy According to the rationalist
              philosophy, design is informed by research and knowledge in a predictable and
              controlled manner.
            </p>
            <p>
              The action-centric perspective is a label given to a collection of interrelated
              concepts, which are antithetical to the rational model. It posits that:
            </p>
            <div className="mt-xl">
              <Button>Click Something</Button>
            </div>
          </div>
          <Image src="https://picsum.photos/seed/picsum/1200/600" />
        </TwoUp>

        <Spacer />

        <SixtyFourty largeSide="left">
          <Image src="https://picsum.photos/seed/picsum/1200/600" />

          <div className="pr-lg display-flex justify-content-start flex-dir-col">
            <h1>60/40 Left</h1>
            <p>
              The rational model is based on a rationalist philosophy According to the rationalist
              philosophy, design is informed by research and knowledge in a predictable and
              controlled manner.
            </p>
            <p>
              The action-centric perspective is a label given to a collection of interrelated
              concepts, which are antithetical to the rational model. It posits that:
            </p>
            <div className="mt-xl">
              <Button icon="chevron-right">Click Something</Button>
            </div>
          </div>
        </SixtyFourty>
      </Container>

      <Spacer />

      <Container>
        <SingleWithSidebar
          sidebarContent={
            <>
              <h3>Sidebar Title</h3>
              <ul>
                <li>List Item</li>
                <li>Another Item</li>
                <li>More stuff</li>
              </ul>
            </>
          }
        >
          <Heading className="text-transform-uppercase">Block with a sidebar</Heading>
          <p>
            The boundaries between art and design are blurred, largely due to a range of
            applications both for the term 'art' and the term 'design'. Applied arts can include
            industrial design, graphic design, fashion design, and the decorative arts which
            traditionally includes craft objects. In graphic arts (2D image making that ranges from
            photography to illustration), the distinction is often made between fine art and
            commercial art, based on the context within which the work is produced and how it is
            traded.
          </p>
          <p>
            To a degree, some methods for creating work, such as employing intuition, are shared
            across the disciplines within the applied arts and fine art. Mark Getlein, writer,
            suggests the principles of design are "almost instinctive", "built-in", "natural", and
            part of "our sense of 'rightness'." However, the intended application and context of the
            resulting works will vary greatly.
          </p>
          <p>
            This is not to say that production never involves problem-solving or creativity, nor
            that design always involves creativity. Designs are rarely perfect and are sometimes
            repetitive. The imperfection of a design may task a production position (e.g. production
            artist, construction worker) with utilizing creativity or problem-solving skills to
            compensate for what was overlooked in the design process. Likewise, a design may be a
            simple repetition (copy) of a known preexisting solution, requiring minimal, if any,
            creativity or problem-solving skills from the designer.
          </p>
          <p>
            "Process design" (in contrast to "design process" mentioned above) is to the planning of
            routine steps of a process aside from the expected result. Processes (in general) are
            treated as a product of design, not the method of design. The term originated with the
            industrial designing of chemical processes. With the increasing complexities of the
            information age, consultants and executives have found the term useful to describe the
            design of business processes as well as manufacturing processes.
          </p>
          <FlexContainer className="mt-xxl">
            <Tag>Test</Tag>
            <Tag>Other</Tag>
          </FlexContainer>
        </SingleWithSidebar>
      </Container>

      <Spacer />

      <Container className="p-xxxl" fullWidth={true} color="dark" fullHeight={true}>
        <Heading>Stumptown shaman</Heading>

        <SixtyFourty largeSide="right">
          <div className="pr-lg display-flex justify-content-start flex-dir-col">
            <h1>60/40 Right</h1>
            <p>
              The rational model is based on a rationalist philosophy According to the rationalist
              philosophy, design is informed by research and knowledge in a predictable and
              controlled manner.
            </p>
            <p>
              The action-centric perspective is a label given to a collection of interrelated
              concepts, which are antithetical to the rational model. It posits that:
            </p>
            <div className="mt-xl">
              <Button>Click Something</Button>
            </div>
          </div>
          <Image src="https://picsum.photos/seed/picsum/1200/600" />
        </SixtyFourty>
      </Container>

      <Spacer />

      <Container>
        <Heading>Cards</Heading>
        <GridContainer gridSize={3} gridGap={48}>
          <Card title="Brunch knausgaard truffaut" mainImage="https://picsum.photos/1200/600">
            <p className="mb-xl">
              Bitters cold-pressed pop-up austin cornhole lomo gastropub green juice blog messenger
              bag ennui tote bag. Vegan normcore chicharrones whatever occupy chia.
            </p>
            <>
              <Button className="mr-xs">Click Something</Button>
              <Button secondary={true}>Other thing</Button>
            </>
          </Card>
          <Card
            theme="accent"
            title="Enamel pin stumptown shaman"
            className="display-flex align-items-center"
          >
            <p className="mb-xl">
              Deep v mixtape kinfolk, whatever seitan yuccie man bun. Distillery health goth godard
              schlitz blue bottle. Plaid squid viral, tacos single-origin coffee XOXO quinoa.
              Wayfarers franzen keffiyeh, bicycle rights you probably haven't heard of them ramps
              craft beer air plant locavore bushwick next level DIY. Leggings wayfarers hammock
              williamsburg.
            </p>
            <Button secondary={true}>Click Something</Button>
          </Card>
          <Card title="Gentrify single-origin coffee" mainImage="https://picsum.photos/1200/600">
            <p className="mb-xl">
              Cred poutine la croix gastropub coloring book kitsch man bun. Leggings man braid
              tattooed narwhal air plant vegan disrupt sustainable tousled celiac poutine shabby
              chic distillery enamel pin. Palo santo occupy fingerstache small batch.
            </p>
            <Button>Click Something</Button>
          </Card>
        </GridContainer>
      </Container>

      <Spacer />

      <Container>
        <Heading>Brands</Heading>
        <GridContainer
          gridSize={4}
          gridColumnGap={0}
          gridRowGap={96}
          gridElementSize="140px"
          className="justify-content-space-between"
        >
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </GridContainer>
      </Container>

      <Spacer />

      <Footer />
    </Layout>
  )
}

const Logo = () => {
  return (
    <div
      className="display-flex justify-content-center align-items-center"
      style={{ height: '100px' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.778 100" width="140">
        <path
          d="M41.419,48.371A3.656,3.656,0,0,0,40.373,51.3l-.018-.018a4.344,4.344,0,0,1-4.694,4.694l.018.018A3.678,3.678,0,1,0,39,59.312l.019.018a4.344,4.344,0,0,1,4.694-4.694l-.019-.018a3.671,3.671,0,1,0-2.272-6.247Z"
          fill="#394149"
        />
        <path
          d="M34.042,53.636l-.019-.018A3.631,3.631,0,0,0,38,49.644l.019.018a4.344,4.344,0,0,1,4.694-4.694l-.019-.018a3.678,3.678,0,1,0-3.318-3.318l-.018-.019a4.343,4.343,0,0,1-4.694,4.694l.018.019A3.631,3.631,0,0,0,30.705,50.3l-.018-.018a4.345,4.345,0,0,1-4.694,4.694l.018.018a3.678,3.678,0,1,0,3.318,3.318l.019.018A4.344,4.344,0,0,1,34.042,53.636Z"
          fill="#394149"
        />
        <path
          d="M27.34,51.629A3.652,3.652,0,0,0,28.385,48.7l.019.018A4.344,4.344,0,0,1,33.1,44.024l-.019-.018a3.677,3.677,0,1,0-3.318-3.318l-.018-.018a4.344,4.344,0,0,1-4.694,4.694l.018.018a3.671,3.671,0,1,0,2.273,6.247Z"
          fill="#394149"
        />
        <path d="M58.317,41.655h2.97V56.108h-2.97Z" fill="#394149" />
        <path
          d="M62.969,51.159a5.247,5.247,0,1,1,5.247,5.226A5.188,5.188,0,0,1,62.969,51.159Zm7.524,0A2.278,2.278,0,1,0,68.216,53.5,2.221,2.221,0,0,0,70.493,51.159Z"
          fill="#394149"
        />
        <path
          d="M85.3,46.209v9.4c0,3.326-2.594,4.732-5.227,4.732a5.062,5.062,0,0,1-4.692-2.4l2.534-1.465a2.262,2.262,0,0,0,2.257,1.247,1.973,1.973,0,0,0,2.237-2.118V54.7a3.516,3.516,0,0,1-2.891,1.287,5.031,5.031,0,0,1,0-10.057,3.516,3.516,0,0,1,2.891,1.287v-1.01ZM82.41,50.96a2.4,2.4,0,1,0-2.395,2.3A2.24,2.24,0,0,0,82.41,50.96Z"
          fill="#394149"
        />
        <path
          d="M86.982,51.159a5.247,5.247,0,1,1,5.247,5.226A5.188,5.188,0,0,1,86.982,51.159Zm7.524,0A2.278,2.278,0,1,0,92.229,53.5,2.221,2.221,0,0,0,94.506,51.159Z"
          fill="#394149"
        />
        <path
          d="M98.861,43.556a1.782,1.782,0,1,1,1.782,1.782A1.8,1.8,0,0,1,98.861,43.556Zm.3,2.653h2.971v9.9H99.157Z"
          fill="#394149"
        />
        <path
          d="M114.956,51.159a4.971,4.971,0,0,1-4.732,5.226,3.715,3.715,0,0,1-2.949-1.208v4.891h-2.97V46.209h2.97v.93a3.717,3.717,0,0,1,2.949-1.207A4.97,4.97,0,0,1,114.956,51.159Zm-2.97,0a2.356,2.356,0,1,0-2.355,2.415A2.26,2.26,0,0,0,111.986,51.159Z"
          fill="#394149"
        />
        <path
          d="M124.121,53.138c0,2.277-1.979,3.247-4.117,3.247a4.335,4.335,0,0,1-4.257-2.356l2.573-1.465A1.627,1.627,0,0,0,120,53.732c.712,0,1.069-.218,1.069-.613,0-1.09-4.871-.515-4.871-3.94,0-2.159,1.822-3.247,3.881-3.247a4.329,4.329,0,0,1,3.86,2.118l-2.534,1.366a1.437,1.437,0,0,0-1.326-.871c-.515,0-.832.2-.832.554C119.251,50.228,124.121,49.475,124.121,53.138Z"
          fill="#394149"
        />
        <path
          d="M134.97,46.209v9.9H132v-.931a3.382,3.382,0,0,1-2.83,1.208c-2,0-3.7-1.425-3.7-4.1V46.209h2.97v5.642a1.632,1.632,0,0,0,1.722,1.8c1.089,0,1.841-.633,1.841-2.039v-5.4Z"
          fill="#394149"
        />
        <path
          d="M152,50.03v6.078h-2.97V50.287c0-.99-.475-1.623-1.425-1.623-.99,0-1.545.693-1.545,1.861v5.583h-2.969V50.287c0-.99-.475-1.623-1.426-1.623-.99,0-1.544.693-1.544,1.861v5.583h-2.97v-9.9h2.97v.91a3.039,3.039,0,0,1,2.653-1.187,2.945,2.945,0,0,1,2.593,1.306,3.262,3.262,0,0,1,2.871-1.306C150.511,45.932,152,47.555,152,50.03Z"
          fill="#394149"
        />
        <circle cx="154.512" cy="43.944" r="2.204" fill="#394149" />
      </svg>
    </div>
  )
}

export default Sandbox
