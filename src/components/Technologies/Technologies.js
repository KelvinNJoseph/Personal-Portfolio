import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with a range of technologies in web development, focusing on front-end frameworks and tools.  
    
  </SectionText>
    <List>
      <ListItem>
        <DiReact  size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js, Javascript, 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase  size="3rem"/>
        <ListContainer>
          <ListTitle>
          Web Technologies
          </ListTitle>
          <ListParagraph>
          Proficient in <br />
          HTML, CSS, Tailwind CSS, and Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>
          Version Control & Deployment
          </ListTitle>
          <ListParagraph>
          Familiar with <br />
          Git, GitHub,
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
