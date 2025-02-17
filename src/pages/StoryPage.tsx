import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Fireflies from '../components/Fireflies';

const StoryContent = () => {
  const { id, pageId } = useParams();

  // Chapter 1: The Boggart Lesson
  if (id === '1') {
    switch (pageId) {
      case '1':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The Boggart Lesson Begins</h2>
            <p>
              The third-year students of Hufflepuff and Ravenclaw filed into the Defense
              Against the Dark Arts classroom, their attention immediately drawn to a
              mysterious full-body mirror wardrobe at the front of the room.
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="my-8 p-6 bg-white/10 rounded-lg"
            >
              <p className="italic">
                Professor Aldren: "Today, we're going to confront something that every
                witch and wizard must learn to face: fear."
              </p>
            </motion.div>
            <p>
              A wave of whispers swept through the classroom, but Professor Aldren
              raised his hand for silence, his dark robes sweeping the floor as he
              gestured toward the rattling wardrobe.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Inside here is a Boggart. Can anyone tell me what
                a Boggart is?"
              </p>
            </motion.div>
          </motion.div>
        );

      case '2':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Understanding the Boggart</h2>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Aditya Kalra: *raises hand* "A Boggart is a shape-shifting creature
                that takes the form of whatever it believes will frighten us the most."
              </p>
              <p className="italic mt-4">
                Professor Aldren: "Precisely! Boggarts thrive on fear. But, as with
                many dark creatures, they have a weakness: laughter. The charm we
                will use today is called Riddikulus. When cast correctly, it forces
                the Boggart to assume a form that is so absurd, it becomes laughable."
              </p>
            </motion.div>
            <p>
              The wardrobe rattled ominously as Professor Aldren flicked his wand.
              Several students exchanged nervous glances.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "The incantation is 'Riddikulus.' But it takes
                more than just saying the word. You must visualize the
                transformation—imagine your fear turned into something utterly
                ridiculous. That visualization, combined with the spell, will defeat
                the Boggart."
              </p>
            </motion.div>
          </motion.div>
        );

      case '3':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The First Volunteer</h2>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Now, who will go first?"
              </p>
            </motion.div>
            <p>
              A tense silence filled the room. Finally, a student in a yellow
              uniform hesitantly raised her hand.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Excellent, Miss Vance. Step forward."
              </p>
            </motion.div>
            <p>
              Miss Vance shuffled to the front, clutching her wand tightly. As
              Professor Aldren waved his wand, the wardrobe burst open. The Boggart
              shot out, immediately transforming into a towering figure of her
              family doctor holding a gigantic needle.
            </p>
          </motion.div>
        );

      case '4':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Facing the Fear</h2>
            <p>
              Miss Vance stood frozen, her face pale as she stared at the
              menacing doctor-Boggart.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Focus, Miss Vance. What can you think of doing
                to make this doctor look ridiculous?"
              </p>
            </motion.div>
            <p>
              Miss Vance's eyes darted around the room, then suddenly lit up with
              an idea. She raised her wand with newfound determination.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Miss Vance: "R-Riddikulus!"
              </p>
            </motion.div>
            <p>
              *A bright flash of light filled the room*
            </p>
            <p>
              The Doctor-Boggart was suddenly caught in a rainfall of ripe, juicy
              red apples. The class erupted with laughter as the Doctor-Boggart
              frantically tried to remove the apples stuck in its syringe.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Well done, Miss Vance! Next!"
              </p>
            </motion.div>
          </motion.div>
        );

      case '5':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The Class Continues</h2>
            <p>
              One by one, students stepped forward to face their fears. Each
              encounter revealed something deeply personal about each student, and
              with every successful casting of the Riddikulus charm, the class's
              confidence grew.
            </p>
            <p>
              Some fears were common—spiders turned into roller-skating clowns,
              snakes became bouncing rubber toys, and dark figures dissolved into
              soap bubbles. Other fears were more unique, but each student found
              their own way to transform their terror into triumph.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                *Various student voices could be heard throughout the class*
              </p>
              <p className="italic mt-2">
                "Riddikulus!"
              </p>
              <p className="italic mt-2">
                *Laughter and cheers after each successful transformation*
              </p>
            </motion.div>
          </motion.div>
        );

      case '6':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Lesson's End</h2>
            <p>
              As the last student returned to their seat, Professor Aldren stepped
              forward to the wardrobe, his wand raised.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Fear is only as powerful as we allow it to be.
                Remember that courage isn't the absence of fear, but the ability to
                face it. Well done, everyone."
              </p>
            </motion.div>
            <p>
              With a gentle flick of his wand, he secured the wardrobe's lock.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Class dismissed."
              </p>
            </motion.div>
            <p>
              The students gathered their belongings and filed out of the
              classroom, chattering excitedly about their achievements. Each
              student carried with them not just their books and wands, but a
              newfound confidence in their ability to face their fears.
            </p>
            <p>
              As the last student left the room, the wardrobe gave one final
              rattle, but now, it seemed far less threatening than before.
            </p>
          </motion.div>
        );

      default:
        return (
          <div className="prose prose-invert max-w-none">
            <h2>Page Not Found</h2>
            <p>This page hasn't been written yet.</p>
          </div>
        );
    }
  }

  // Chapter 2: The Second Student
  if (id === '2') {
    switch (pageId) {
      case '1':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The Second Volunteer</h2>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Who's next?"
              </p>
            </motion.div>
            <p>
              After a pause, a student from Ravenclaw nervously raised his hand.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Liam Pince: "I'll go, sir."
              </p>
              <p className="italic mt-4">
                Professor Aldren: "Excellent, Mr. Pince. Step forward."
              </p>
            </motion.div>
          </motion.div>
        );

      case '2':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Confronting the Fear</h2>
            <p>
              Liam hesitated before shuffling to the front. His classmates exchanged
              murmurs of encouragement as Aldren waved his wand again.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                *The wardrobe creaked ominously before bursting open, releasing the
                Boggart in a cloud of smoke*
              </p>
            </motion.div>
            <p>
              It instantly morphed into a writhing mass of insects—giant
              cockroaches, centipedes, and spiders scuttling over one another. The
              swarm hissed and clicked menacingly as they advanced toward Liam.
            </p>
            <p>
              Liam stumbled back, his face pale and glistening with sweat.
            </p>
          </motion.div>
        );

      case '3':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The Moment of Truth</h2>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Focus, Mr. Pince! Think of something
                ridiculous—something that makes these insects laughable!"
              </p>
            </motion.div>
            <p>
              Liam's breathing quickened, but then his eyes brightened with an
              idea. Raising his wand, he shouted:
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Liam: "Riddikulus!"
              </p>
            </motion.div>
          </motion.div>
        );

      case '4':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Sweet Victory</h2>
            <p>
              A flash of light illuminated the room. The writhing insects suddenly
              transformed into a colorful pile of squishy, sour gummies. Bright
              red, blue, green, and yellow candies tumbled to the floor, and the
              smell of sugar replaced the insects' menacing hiss.
            </p>
            <p>
              The class erupted with laughter as Liam let out a sigh of relief.
              One of the gummy spiders wiggled harmlessly before plopping to the
              ground.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Aldren: "Well done, Mr. Pince! You faced your fear and
                triumphed."
              </p>
            </motion.div>
            <p>
              Liam returned to his seat, a triumphant smile spreading across his
              face as his classmates patted him on the back.
            </p>
          </motion.div>
        );

      default:
        return (
          <div className="prose prose-invert max-w-none">
            <h2>Page Not Found</h2>
            <p>This page hasn't been written yet.</p>
          </div>
        );
    }
  }

  // Chapter 3: The Potions Mishap
  if (id === '3') {
    switch (pageId) {
      case '1':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The Potions Classroom</h2>
            <p>
              The dungeon classroom was filled with the soft bubbling of cauldrons
              and the sharp scent of various ingredients. Professor Slughorn stood
              at the front, his round belly preceding him as he addressed the
              class.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Slughorn: "Today, we'll be brewing the Draught of Peace.
                A complex potion, but one that might come in handy during your
                O.W.L.s!"
              </p>
            </motion.div>
          </motion.div>
        );

      case '2':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The Brewing Begins</h2>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Slughorn: "Remember, precise measurements are crucial.
                Add the powdered moonstone gradually until your potion turns green."
              </p>
            </motion.div>
            <p>
              Students hurried to their cauldrons, measuring ingredients with
              varying degrees of confidence. The air grew thick with multicolored
              steam.
            </p>
          </motion.div>
        );

      case '3':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>An Unexpected Turn</h2>
            <p>
              Suddenly, a loud hissing sound came from the back of the room.
              Everyone turned to see Marcus Flint's cauldron bubbling violently.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Marcus: "Professor! I think something's wrong!"
              </p>
              <p className="italic mt-4">
                Professor Slughorn: "Great Scott! Everyone, take cover!"
              </p>
            </motion.div>
          </motion.div>
        );

      case '4':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>The Resolution</h2>
            <p>
              With a wave of his wand, Professor Slughorn contained the volatile
              potion in a magical barrier just as it exploded. Instead of disaster,
              the classroom was treated to a spectacular display of shimmering,
              multicolored bubbles.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Professor Slughorn: "Well, Mr. Flint, it seems you've accidentally
                created a rather festive variation of Bubble Solution. Not quite
                the Draught of Peace, but certainly peaceful to watch!"
              </p>
            </motion.div>
            <p>
              The class laughed as the bubbles drifted lazily around the room,
              each one playing a soft musical note when popped.
            </p>
          </motion.div>
        );

      default:
        return (
          <div className="prose prose-invert max-w-none">
            <h2>Page Not Found</h2>
            <p>This page hasn't been written yet.</p>
          </div>
        );
    }
  }

  // Chapter 4: The Forbidden Forest
  if (id === '4') {
    switch (pageId) {
      case '1':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Into the Forest</h2>
            <p>
              The evening air was crisp as Hagrid led a small group of students
              toward the edge of the Forbidden Forest. Their wands cast long
              shadows in the twilight.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Hagrid: "Right then, we're lookin' fer some Mooncalf tracks.
                They'll be out soon, with the full moon an' all."
              </p>
            </motion.div>
          </motion.div>
        );

      case '2':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Strange Discoveries</h2>
            <p>
              As they ventured deeper into the forest, strange sounds echoed
              through the trees. The students huddled closer together, their wands
              raised.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Student: "What was that noise?"
              </p>
              <p className="italic mt-4">
                Hagrid: "Nothin' to worry about. Jus' the forest creatures sayin'
                hello."
              </p>
            </motion.div>
          </motion.div>
        );

      case '3':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>Magical Encounter</h2>
            <p>
              Suddenly, the trees ahead began to glow with a soft, silver light.
              The group emerged into a moonlit clearing to find a remarkable
              sight.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Hagrid: *whispers* "Well, would yeh look at that..."
              </p>
            </motion.div>
            <p>
              A group of Mooncalves were performing their mysterious dance,
              leaving intricate patterns in the grass as they moved in the
              moonlight.
            </p>
          </motion.div>
        );

      case '4':
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="prose prose-invert max-w-none"
          >
            <h2>A Night to Remember</h2>
            <p>
              The students watched in awe as the Mooncalves danced, their
              movements creating patterns that seemed to tell ancient stories in
              the silvery light.
            </p>
            <motion.div className="my-8 p-6 bg-white/10 rounded-lg">
              <p className="italic">
                Hagrid: "This is why we come out here, see? Some things yeh just
                can't learn from books."
              </p>
            </motion.div>
            <p>
              As they made their way back to the castle, each student carried
              with them not just their collected samples, but memories of a truly
              magical evening.
            </p>
          </motion.div>
        );

      default:
        return (
          <div className="prose prose-invert max-w-none">
            <h2>Page Not Found</h2>
            <p>This page hasn't been written yet.</p>
          </div>
        );
    }
  }

  return (
    <div className="prose prose-invert max-w-none">
      <h2>Chapter {id}, Page {pageId}</h2>
      <p>Story content coming soon...</p>
    </div>
  );
};

const StoryPage = () => {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cover bg-center p-8 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <Fireflies />

      <Link
        to="/"
        className="fixed top-4 left-4 z-20 bg-white/90 p-2 rounded-full hover:scale-110 transition-transform"
      >
        <Home className="w-6 h-6 text-purple-800" />
      </Link>

      <Link
        to={`/chapter/${id}`}
        className="fixed top-4 left-16 z-20 bg-white/90 px-4 py-2 rounded-full hover:scale-110 transition-transform"
      >
        <span className="text-purple-800">Back to Chapter</span>
      </Link>

      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <StoryContent />
      </div>
    </motion.div>
  );
};

export default StoryPage;