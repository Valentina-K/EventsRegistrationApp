import { Box, Container, Typography } from "@mui/material";
import EventsCard from "../components/EventsCard";

export const BoardPage = () => {
  const events = [
    {
      title: "culpa ex magna sit",
      description:
        "pariatur consequat quis in velit veniam veniam enim adipisicing ad ullamco qui proident adipisicing Lorem consequat laborum excepteur",
      "event-date": "2024-08-22",
      organization: "Alexion Pharmaceuticals",
      _id: 0,
    },
    {
      title: "ullamco aliqua commodo minim",
      description:
        "consequat sit irure duis eu sit tempor duis aliquip officia laborum nostrud veniam dolore irure anim est non amet eu",
      "event-date": "2024-08-09",
      organization: "Markel",
      _id: 1,
    },
    {
      title: "ex incididunt dolore",
      description: "est cillum magna reprehenderit non non",
      "event-date": "2024-07-28",
      organization: "TJX",
      _id: 2,
    },
    {
      title: "nostrud ipsum ea",
      description:
        "culpa magna commodo exercitation ea ipsum voluptate nostrud laborum quis do eu nulla do commodo",
      "event-date": "2024-07-02",
      organization: "Waste Management",
      _id: 3,
    },
    {
      title: "non magna mollit qui non",
      description: "reprehenderit sit aliqua minim tempor reprehenderit",
      "event-date": "2024-08-31",
      organization: "Tetra Tech",
      _id: 4,
    },
    {
      title: "ipsum deserunt ipsum excepteur tempor",
      description:
        "mollit aute elit cillum minim velit Lorem occaecat fugiat voluptate laborum excepteur quis do do",
      "event-date": "2024-06-01",
      organization: "Exide Technologies",
      _id: 5,
    },
    {
      title: "et proident minim commodo minim",
      description:
        "labore aliquip sint do quis Lorem voluptate aliquip commodo aute proident do est duis irure laborum amet culpa",
      "event-date": "2024-05-30",
      organization: "Covance",
      _id: 6,
    },
    {
      title: "amet elit",
      description:
        "labore eu tempor amet pariatur nisi exercitation occaecat incididunt tempor non eu aute sit consequat consequat",
      "event-date": "2024-06-02",
      organization: "Advance Auto Parts",
      _id: 7,
    },
    {
      title: "sit irure",
      description:
        "quis sint irure magna reprehenderit laborum non elit deserunt proident sint irure ut esse culpa",
      "event-date": "2024-06-26",
      organization: "Yahoo",
      _id: 8,
    },
    {
      title: "ad ex exercitation exercitation fugiat",
      description:
        "duis adipisicing fugiat eu consequat velit qui voluptate aliqua duis adipisicing est eu nisi veniam",
      "event-date": "2024-06-19",
      organization: "Liberty Media",
      _id: 9,
    },
    {
      title: "dolore irure tempor",
      description:
        "pariatur laborum cillum est dolore ex veniam sunt enim consequat nulla velit eiusmod consequat esse quis nulla",
      "event-date": "2024-06-23",
      organization: "Targa Energy",
      _id: 10,
    },
    {
      title: "labore",
      description: "est veniam excepteur aliquip Lorem veniam non velit ea",
      "event-date": "2024-07-26",
      organization: "Entergy",
      _id: 11,
    },
    {
      title: "quis exercitation duis dolore reprehenderit",
      description: "excepteur sit",
      "event-date": "2024-07-21",
      organization: "Equinix",
      _id: 12,
    },
    {
      title: "ullamco veniam",
      description: "laboris ut et sint",
      "event-date": "2024-08-30",
      organization: "Universal",
      _id: 13,
    },
    {
      title: "Lorem minim eiusmod",
      description: "tempor et culpa tempor consequat qui",
      "event-date": "2024-08-24",
      organization: "H.B. Fuller",
      _id: 14,
    },
    {
      title: "sit ullamco commodo consectetur",
      description:
        "dolor pariatur Lorem ipsum cillum Lorem excepteur sit aliqua ipsum cupidatat sit",
      "event-date": "2024-08-01",
      organization: "Silgan Holdings",
      _id: 15,
    },
    {
      title: "nostrud amet do",
      description: "velit cupidatat id cillum nostrud sint",
      "event-date": "2024-09-12",
      organization: "Crestwood Equity Partners",
      _id: 16,
    },
    {
      title: "dolore cupidatat nulla",
      description:
        "adipisicing eiusmod est ea pariatur non minim cupidatat ullamco laboris",
      "event-date": "2024-06-18",
      organization: "Celanese",
      _id: 17,
    },
    {
      title: "aute et",
      description:
        "enim commodo cupidatat qui aliqua mollit officia cupidatat laborum id",
      "event-date": "2024-07-27",
      organization: "Charter Communications",
      _id: 18,
    },
    {
      title: "amet nisi consequat pariatur sunt",
      description:
        "anim consectetur cupidatat enim duis qui amet ex ea reprehenderit id sunt culpa tempor consectetur reprehenderit amet officia",
      "event-date": "2024-08-30",
      organization: "Liberty Media",
      _id: 19,
    },
    {
      title: "nostrud in in",
      description:
        "ullamco aliqua aute ex culpa incididunt deserunt non aliqua enim eu",
      "event-date": "2024-05-30",
      organization: "Marathon Petroleum",
      _id: 20,
    },
    {
      title: "qui incididunt",
      description:
        "Lorem ea anim esse in ut duis mollit consectetur amet incididunt voluptate commodo duis laboris eiusmod",
      "event-date": "2024-06-09",
      organization: "United Continental Holdings",
      _id: 21,
    },
    {
      title: "nulla id deserunt pariatur",
      description: "commodo aliquip ipsum",
      "event-date": "2024-08-21",
      organization: "Time Warner Cable",
      _id: 22,
    },
    {
      title: "dolor et anim aliquip",
      description: "ut",
      "event-date": "2024-06-07",
      organization: "Harris",
      _id: 23,
    },
    {
      title: "magna ipsum incididunt ad",
      description:
        "consequat officia sint irure irure esse velit ea ut anim ad exercitation fugiat ex eu dolor minim in ipsum id",
      "event-date": "2024-09-12",
      organization: 'Toys ""R"" Us',
      _id: 24,
    },
    {
      title: "reprehenderit ad qui",
      description:
        "mollit culpa ad magna eiusmod cupidatat cupidatat voluptate dolor deserunt sunt nisi minim incididunt exercitation enim",
      "event-date": "2024-08-31",
      organization: "Discover Financial Services",
      _id: 25,
    },
    {
      title: "id officia",
      description:
        "incididunt voluptate Lorem ut duis ea nisi veniam ea non aliqua eu Lorem cupidatat in consequat est dolore adipisicing culpa",
      "event-date": "2024-09-04",
      organization: "Cracker Barrel Old Country Store",
      _id: 26,
    },
    {
      title: "voluptate",
      description: "deserunt est sint excepteur laborum ex do et",
      "event-date": "2024-05-29",
      organization: "Office Depot",
      _id: 27,
    },
    {
      title: "fugiat",
      description: "elit anim magna enim est",
      "event-date": "2024-08-25",
      organization: "Chico's FAS",
      _id: 28,
    },
    {
      title: "deserunt",
      description:
        "fugiat enim non elit cupidatat esse esse labore aliqua duis",
      "event-date": "2024-08-31",
      organization: "Allegheny Technologies",
      _id: 29,
    },
    {
      title: "ea minim",
      description:
        "pariatur Lorem esse sint officia laboris ex quis ea fugiat nulla nisi do reprehenderit exercitation quis dolor amet pariatur",
      "event-date": "2024-07-02",
      organization: "General Dynamics",
      _id: 30,
    },
    {
      title: "aliquip quis laborum",
      description:
        "officia laborum irure nisi minim aliqua proident nostrud esse dolore non irure sit voluptate excepteur",
      "event-date": "2024-09-15",
      organization: "Reinsurance Group of America",
      _id: 31,
    },
    {
      title: "pariatur eiusmod pariatur",
      description:
        "ullamco esse eu minim id anim deserunt consectetur labore id occaecat est sint anim duis ipsum est",
      "event-date": "2024-07-07",
      organization: "Tesoro",
      _id: 32,
    },
    {
      title: "qui mollit amet ipsum",
      description:
        "do incididunt ad adipisicing laborum in adipisicing exercitation in aute et adipisicing dolore excepteur nostrud irure amet incididunt",
      "event-date": "2024-06-02",
      organization: "Graybar Electric",
      _id: 33,
    },
    {
      title: "pariatur nisi eiusmod in irure",
      description: "sit ullamco sit non adipisicing anim ad proident",
      "event-date": "2024-08-16",
      organization: "Hyster-Yale Materials Handling",
      _id: 34,
    },
    {
      title: "commodo",
      description:
        "id eu enim sunt in anim duis ad dolore consequat veniam ullamco ea tempor excepteur officia Lorem proident",
      "event-date": "2024-07-29",
      organization: "Lockheed Martin",
      _id: 35,
    },
    {
      title: "aliquip excepteur elit labore",
      description:
        "fugiat in Lorem aute esse esse consectetur adipisicing incididunt voluptate pariatur ut laborum",
      "event-date": "2024-06-18",
      organization: "Walgreens",
      _id: 36,
    },
    {
      title: "ex esse esse labore",
      description:
        "excepteur quis elit nisi laboris aliqua cillum voluptate tempor sunt magna minim consequat",
      "event-date": "2024-06-22",
      organization: "Telephone & Data Systems",
      _id: 37,
    },
    {
      title: "dolor laborum esse do qui",
      description:
        "sit quis commodo et anim labore elit dolore qui minim officia dolore id pariatur labore",
      "event-date": "2024-07-16",
      organization: "Visa",
      _id: 38,
    },
    {
      title: "id dolor laboris",
      description: "mollit",
      "event-date": "2024-06-08",
      organization: "JetBlue Airways",
      _id: 39,
    },
    {
      title: "eu duis laboris cillum pariatur",
      description: "ut dolor eiusmod nulla est duis amet laboris",
      "event-date": "2024-08-15",
      organization: "AGCO",
      _id: 40,
    },
    {
      title: "qui do",
      description:
        "do culpa occaecat ex dolore excepteur enim pariatur esse elit",
      "event-date": "2024-06-18",
      organization: "Delek US Holdings",
      _id: 41,
    },
    {
      title: "enim et reprehenderit magna nostrud",
      description:
        "est culpa sint nostrud amet enim pariatur occaecat et nostrud ipsum do officia exercitation aliqua voluptate est laboris ipsum",
      "event-date": "2024-07-25",
      organization: "Snap-on",
      _id: 42,
    },
    {
      title: "magna velit officia occaecat commodo",
      description:
        "anim pariatur dolor proident veniam minim anim exercitation velit",
      "event-date": "2024-08-03",
      organization: "Albemarle",
      _id: 43,
    },
    {
      title: "officia id tempor",
      description:
        "sunt reprehenderit ut ut ad velit dolor voluptate magna culpa officia aliquip minim qui ullamco eiusmod ad anim ipsum",
      "event-date": "2024-05-25",
      organization: "G-III Apparel Group",
      _id: 44,
    },
    {
      title: "labore enim exercitation nulla ex",
      description:
        "eu id id consectetur laboris pariatur dolore deserunt excepteur commodo culpa quis aute in in exercitation aliqua",
      "event-date": "2024-06-14",
      organization: "Philip Morris International",
      _id: 45,
    },
    {
      title: "occaecat id elit in",
      description:
        "deserunt aliqua in minim Lorem duis sint incididunt est mollit eu aliqua labore officia fugiat do irure reprehenderit laborum",
      "event-date": "2024-08-30",
      organization: "CalAtlantic Group",
      _id: 46,
    },
    {
      title: "incididunt",
      description:
        "et eu do qui reprehenderit ipsum reprehenderit quis incididunt excepteur elit nostrud cillum laboris adipisicing sunt aliquip",
      "event-date": "2024-07-24",
      organization: "J.C. Penney",
      _id: 47,
    },
    {
      title: "sunt commodo",
      description: "aliqua sunt est laboris Lorem",
      "event-date": "2024-08-21",
      organization: "Textron",
      _id: 48,
    },
    {
      title: "qui dolore",
      description:
        "nulla veniam quis ipsum commodo duis do nisi irure anim occaecat mollit",
      "event-date": "2024-08-06",
      organization: "Wendy's",
      _id: 49,
    },
    {
      title: "non cupidatat est fugiat",
      description:
        "cupidatat mollit eiusmod qui culpa pariatur mollit pariatur sunt cupidatat labore et voluptate velit",
      "event-date": "2024-07-22",
      organization: "World Fuel Services",
      _id: 50,
    },
    {
      title: "excepteur cupidatat",
      description:
        "amet officia exercitation nulla veniam quis incididunt aliqua reprehenderit ipsum minim et",
      "event-date": "2024-07-11",
      organization: "Occidental Petroleum",
      _id: 51,
    },
    {
      title: "occaecat magna",
      description: "commodo eiusmod veniam ut elit eu commodo",
      "event-date": "2024-06-05",
      organization: "HealthSouth",
      _id: 52,
    },
    {
      title: "elit",
      description: "aliqua labore enim ad quis sit id id",
      "event-date": "2024-09-03",
      organization: "Harley-Davidson",
      _id: 53,
    },
    {
      title: "consectetur dolor tempor velit duis",
      description: "do ad sint irure nisi id esse",
      "event-date": "2024-06-12",
      organization: "Calumet Specialty Products Partners",
      _id: 54,
    },
    {
      title: "deserunt nostrud consectetur commodo ad",
      description: "labore dolor pariatur et aliqua duis minim aliqua duis est",
      "event-date": "2024-07-28",
      organization: "Auto-Owners Insurance",
      _id: 55,
    },
    {
      title: "sunt ipsum occaecat elit incididunt",
      description: "aliqua",
      "event-date": "2024-09-06",
      organization: "Aaron's",
      _id: 56,
    },
    {
      title: "exercitation officia",
      description: "deserunt mollit laboris laboris",
      "event-date": "2024-06-12",
      organization: "Assurant",
      _id: 57,
    },
    {
      title: "ea incididunt officia id adipisicing",
      description:
        "est tempor officia ipsum nostrud consequat ea eu non quis exercitation aliquip",
      "event-date": "2024-07-19",
      organization: "Comerica",
      _id: 58,
    },
    {
      title: "duis deserunt enim labore",
      description:
        "voluptate nulla excepteur velit laboris veniam do culpa duis adipisicing culpa ut laboris nostrud proident aliquip ut",
      "event-date": "2024-05-18",
      organization: "United Technologies",
      _id: 59,
    },
    {
      title: "sint excepteur",
      description: "adipisicing",
      "event-date": "2024-07-25",
      organization: "Boston Properties",
      _id: 60,
    },
    {
      title: "quis tempor labore tempor",
      description: "nostrud laborum",
      "event-date": "2024-09-04",
      organization: "Whirlpool",
      _id: 61,
    },
    {
      title: "veniam ad incididunt minim",
      description: "culpa ut labore ad magna adipisicing in",
      "event-date": "2024-05-23",
      organization: "EMCOR Group",
      _id: 62,
    },
    {
      title: "voluptate",
      description:
        "elit do mollit dolore est consectetur fugiat dolore eu non exercitation ad dolore commodo sit",
      "event-date": "2024-06-26",
      organization: "Navient",
      _id: 63,
    },
    {
      title: "consectetur aute ut laboris et",
      description: "laboris",
      "event-date": "2024-08-02",
      organization: "Charter Communications",
      _id: 64,
    },
    {
      title: "et ea voluptate ad nostrud",
      description: "Lorem",
      "event-date": "2024-09-07",
      organization: "Steelcase",
      _id: 65,
    },
    {
      title: "cillum adipisicing aute",
      description: "occaecat magna anim nulla",
      "event-date": "2024-05-27",
      organization: "RCS Capital",
      _id: 66,
    },
    {
      title: "aute veniam reprehenderit esse",
      description: "quis ad cillum velit reprehenderit aliquip mollit sint",
      "event-date": "2024-08-12",
      organization: "FMC Technologies",
      _id: 67,
    },
    {
      title: "ut pariatur laborum",
      description: "qui dolore commodo in nulla consectetur cupidatat in non",
      "event-date": "2024-07-02",
      organization: "CME Group",
      _id: 68,
    },
    {
      title: "sint esse culpa irure",
      description: "amet commodo duis ullamco velit",
      "event-date": "2024-08-09",
      organization: "Sears Hometown & Outlet Stores",
      _id: 69,
    },
    {
      title: "nulla ex",
      description:
        "minim Lorem est et eu pariatur enim aliqua aute mollit ea nulla proident excepteur laboris ad",
      "event-date": "2024-06-14",
      organization: "Synnex",
      _id: 70,
    },
    {
      title: "ad",
      description:
        "duis eu adipisicing occaecat elit dolor eiusmod ullamco do nisi cupidatat aliquip in cillum sint",
      "event-date": "2024-08-14",
      organization: "Electronic Arts",
      _id: 71,
    },
    {
      title: "ipsum est do dolore excepteur",
      description:
        "est elit commodo adipisicing velit ut aute aute occaecat sunt ut id voluptate cupidatat nulla tempor cillum dolore",
      "event-date": "2024-06-23",
      organization: "Electronic Arts",
      _id: 72,
    },
    {
      title: "veniam consequat",
      description:
        "laborum laboris amet nostrud do veniam consequat do aliquip cillum sint",
      "event-date": "2024-05-25",
      organization: "Chico's FAS",
      _id: 73,
    },
    {
      title: "culpa dolor eu",
      description:
        "sunt minim laboris ut non irure tempor nulla ad Lorem qui adipisicing ipsum occaecat tempor pariatur anim",
      "event-date": "2024-07-11",
      organization: "Boston Scientific",
      _id: 74,
    },
    {
      title: "esse laborum",
      description:
        "esse anim in laborum do occaecat consectetur officia tempor aliqua tempor deserunt dolor magna quis",
      "event-date": "2024-06-25",
      organization: "St. Jude Medical",
      _id: 75,
    },
    {
      title: "sint commodo enim",
      description: "labore eu officia",
      "event-date": "2024-07-24",
      organization: "ConAgra Foods",
      _id: 76,
    },
    {
      title: "exercitation ex",
      description:
        "culpa quis aute dolore Lorem officia magna irure ullamco fugiat mollit proident consequat mollit ad labore dolor cillum",
      "event-date": "2024-05-22",
      organization: "PPL",
      _id: 77,
    },
    {
      title: "qui",
      description:
        "officia ut proident qui irure nulla in qui exercitation ea culpa excepteur",
      "event-date": "2024-08-05",
      organization: "Johnson Controls",
      _id: 78,
    },
    {
      title: "nulla deserunt aliqua",
      description:
        "qui aliqua laboris consequat consequat aute qui consequat dolore consequat fugiat",
      "event-date": "2024-09-12",
      organization: "Halliburton",
      _id: 79,
    },
    {
      title: "eiusmod in exercitation qui",
      description:
        "adipisicing ex tempor eu eu esse culpa et ex incididunt velit dolor",
      "event-date": "2024-06-06",
      organization: "Xilinx",
      _id: 80,
    },
    {
      title: "commodo veniam laborum",
      description:
        "incididunt eu id non qui est labore sunt Lorem sint consectetur do ullamco quis eiusmod irure in minim",
      "event-date": "2024-09-13",
      organization: "Xylem",
      _id: 81,
    },
    {
      title: "enim nostrud eu",
      description:
        "aute velit eiusmod sit deserunt aliqua voluptate ipsum deserunt sunt velit sint exercitation",
      "event-date": "2024-09-13",
      organization: "Ralph Lauren",
      _id: 82,
    },
    {
      title: "qui excepteur minim qui nostrud",
      description:
        "dolor culpa anim laboris culpa amet exercitation deserunt dolor irure enim",
      "event-date": "2024-07-10",
      organization: "Roundy's",
      _id: 83,
    },
    {
      title: "incididunt aliquip duis dolore",
      description: "incididunt in duis irure adipisicing exercitation ad",
      "event-date": "2024-09-16",
      organization: "Quanta Services",
      _id: 84,
    },
    {
      title: "tempor",
      description:
        "aliqua tempor ullamco non non ad quis voluptate voluptate velit consequat aliquip occaecat ullamco",
      "event-date": "2024-08-07",
      organization: "Big Lots",
      _id: 85,
    },
    {
      title: "reprehenderit laborum",
      description:
        "ad officia reprehenderit veniam nulla magna irure irure tempor ex esse ullamco nisi anim et quis",
      "event-date": "2024-08-26",
      organization: "Calpine",
      _id: 86,
    },
  ];
  return (
    <Container maxWidth="xl">
      <Typography variant="h1" component="h1" style={{ marginBottom: 20 }}>
        Events
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {events.map((event) => (
          <EventsCard key={event._id} data={event} />
        ))}
      </Box>
    </Container>
  );
};
