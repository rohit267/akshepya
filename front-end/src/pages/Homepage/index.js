import { Box, Container, Text, Spacer, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import React from 'react';
import { useSelector } from 'react-redux';
import { FaComments, FaEye } from 'react-icons/fa';
import Layout from '../../components/Layout';
import QuestionTile from '../../components/QuestionTile';
import { BiTime } from 'react-icons/bi';
import { useHistory } from 'react-router';

function Index(props) {
  const user = useSelector(state => state.auth);
  const history = useHistory();

  return (
    <Layout>
      {user.isLoggedIn && (
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <Button
            onClick={() => history.push("/new")}
            leftIcon={<AiOutlinePlus />}
            variant="solid"
            justifyContent="center"
            borderRadius="20"
            mr="5"
            mt="5">
            New Topic
          </Button>
        </Box>
      )}
      <Container maxW="container.lg">
        <Box
          p="8px"
          borderBottom="1px solid #aadbe2"
          display="flex"
          justifyContent="space-between"
          overflow="auto">
          <Box display="inline" minWidth="250px" maxWidth="600px">
            <Text cursor="pointer" fontSize="18px" fontWeight="semibold">
              Topic
            </Text>
          </Box>
          <Spacer />
          <Flex w="160px">
            <Box>
              <FaComments />
            </Box>
            <Box ml="8">
              <FaEye />
            </Box>
            <Box ml="50px">
              <BiTime />
            </Box>
          </Flex>
        </Box>
        {dummyQuestions.map((d, i) => (
          <QuestionTile
            key={i}
            question={d.question}
            category={d.category}
            commenters={d.commenters}
            noOfComments={d.noOfComments}
            views={d.views}
            timeAgo={d.timeAgo}
          />
        ))}
      </Container>
    </Layout>
  );
}

let dummyQuestions = [
  {
    question: 'repurpose 24/7 applications',
    category: 'Barrows goldeneye',
    commenters: [
      'https://robohash.org/dictaaccusamusvoluptates.png?size=50x50&set=set1',
      'https://robohash.org/dictaaccusamusvoluptates.png?size=50x50&set=set1',
    ],
    noOfComments: 1,
    views: 2577,
    timeAgo: '1:44 AM',
  },
  {
    question: 'synergize plug-and-play solutions',
    category: 'African darter',
    commenters: [
      'https://robohash.org/distinctionostrumplaceat.png?size=50x50&set=set1',
      'https://robohash.org/dictaaccusamusvoluptates.png?size=50x50&set=set1',
    ],
    noOfComments: 2,
    views: 3134,
    timeAgo: '7:08 AM',
  },
  {
    question: 'enable back-end e-services',
    category: 'Jackal, black-backed',
    commenters: [
      'https://robohash.org/etnobisdebitis.png?size=50x50&set=set1',
      'https://robohash.org/distinctionostrumplaceat.png?size=50x50&set=set1',
    ],
    noOfComments: 7,
    views: 3476,
    timeAgo: '4:09 AM',
  },
  {
    question: 'disintermediate out-of-the-box networks',
    category: 'Common wolf',
    commenters: [
      'https://robohash.org/doloribusiustocupiditate.png?size=50x50&set=set1',
    ],
    noOfComments: 9,
    views: 1862,
    timeAgo: '1:49 PM',
  },
  {
    question: 'evolve B2C solutions',
    category: 'Bent-toed gecko',
    commenters: [
      'https://robohash.org/porrocumquenumquam.png?size=50x50&set=set1',
      'https://robohash.org/distinctionostrumplaceat.png?size=50x50&set=set1',
    ],
    noOfComments: 10,
    views: 3107,
    timeAgo: '3:23 PM',
  },
  {
    question: 'matrix B2C initiatives',
    category: 'Salmon pink bird eater tarantula',
    commenters: [
      'https://robohash.org/quisinventoreconsequatur.png?size=50x50&set=set1',
    ],
    noOfComments: 6,
    views: 4214,
    timeAgo: '7:00 AM',
  },
  {
    question: 'integrate virtual applications',
    category: 'Sage hen',
    commenters: ['https://robohash.org/rerumerrorquis.png?size=50x50&set=set1'],
    noOfComments: 6,
    views: 3852,
    timeAgo: '11:18 PM',
  },
  {
    question: 'syndicate cross-platform paradigms',
    category: 'Hawk, red-tailed',
    commenters: ['https://robohash.org/remestomnis.png?size=50x50&set=set1'],
    noOfComments: 3,
    views: 2445,
    timeAgo: '1:43 AM',
  },
  {
    question: 'enhance killer technologies',
    category: 'Monkey, rhesus',
    commenters: [
      'https://robohash.org/ipsametnulla.png?size=50x50&set=set1',
      'https://robohash.org/distinctionostrumplaceat.png?size=50x50&set=set1',
    ],
    noOfComments: 1,
    views: 99,
    timeAgo: '3:18 PM',
  },
  {
    question: 'cultivate proactive niches',
    category: 'European wild cat',
    commenters: [
      'https://robohash.org/estillovoluptates.png?size=50x50&set=set1',
    ],
    noOfComments: 4,
    views: 1634,
    timeAgo: '7:25 PM',
  },
];

export default Index;
