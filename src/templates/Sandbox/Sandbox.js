import React from 'react'

import Layout from '../../layouts/Layout'

import Button from '../../basics/Button'

import Card from '../../components/Card'

import Header from '../../features/Header'
import Hero from '../../features/Hero'
import Footer from '../../features/Footer'

import TwoUp from '../../layouts/TwoUp'
import Image from '../../basics/Image'
import Container from '../../containers/Container'
import GridContainer from '../../containers/GridContainer'
import SingleWithSidebar from '../../layouts/SingleWithSidebar'
import Heading from '../../basics/Heading/Heading'

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
        title="Hell from the sandbox"
        backgroundImage="https://picsum.photos/seed/picsum/1200/600"
        className="mt-xl"
        fullScreen={false}
        customHeight="55ch"
      />

      <Container>
        <TwoUp className="mt-xl">
          <div className="pr-lg display-flex justify-content-start flex-dir-col">
            <h1>"Process design"</h1>
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
      </Container>

      <Container className="my-xxxl">
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
          <Heading className="text-transform-uppercase">This is a title on a thing</Heading>
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
        </SingleWithSidebar>

        <GridContainer className="mt-xl" gridSize={2} gridGap={50}>
          <Card
            title="This is a card with a longer title"
            mainImage="https://picsum.photos/seed/picsum/1200/600"
            footerActions={
              <>
                <Button>Click Something</Button>
                <Button secondary={true}>Other thing</Button>
              </>
            }
          >
            The action-centric perspective is a label given to a collection of interrelated
            concepts, which are antithetical to the rational model. It posits that:
          </Card>
          <Card
            title="This is a card with a longer title"
            mainImage="https://picsum.photos/seed/picsum/1200/600"
            footerActions={<Button>Click Something</Button>}
          >
            The action-centric perspective is a label given to a collection of interrelated
            concepts, which are antithetical to the rational model. It posits that:
          </Card>
          <Card
            title="This is a card"
            mainImage="https://picsum.photos/seed/picsum/1200/600"
            footerActions={<Button>Click Something</Button>}
          >
            The action-centric perspective is a label given to a collection of interrelated
            concepts, which are antithetical to the rational model. It posits that:
          </Card>
          <Card
            title="This is a card"
            mainImage="https://picsum.photos/seed/picsum/1200/600"
            footerActions={<Button textAlign="center">Click Something</Button>}
          >
            The action-centric perspective is a label given to a collection of interrelated
            concepts, which are antithetical to the rational model. It posits that:
          </Card>
        </GridContainer>
      </Container>

      <Footer />
    </Layout>
  )
}

export default Sandbox
