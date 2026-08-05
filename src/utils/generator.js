const vocabDefinitions = {
  // Nouns
  'Apex class': 'A template or blueprint from which Apex objects are created.',
  'LWC': 'Lightning Web Component; a modern UI framework for Salesforce.',
  'Trigger': 'Apex code that executes before or after specific DML events.',
  'SOQL query': 'Salesforce Object Query Language used to search your organization’s Salesforce data.',
  'Sandbox': 'A copy of your production organization used for testing and development.',
  'Governor Limit': 'Runtime limits enforced by the Apex runtime engine to ensure code does not monopolize shared resources.',
  'Profile': 'Defines how users access objects and data, and what they can do within the application.',
  'Permission Set': 'A collection of settings and permissions that give users access to various tools and functions.',
  'Flow': 'An application that automates complex business processes.',
  'Custom Object': 'Database tables that allow you to store data specific to your organization.',
  'Validation Rule': 'Verifies that data meets specified standards before a record is saved.',
  'managed package': 'A collection of application components posted on the AppExchange.',
  'metadata': 'Data that describes other data, used heavily in Salesforce deployments.',
  
  // Adjectives
  'bulkified': 'Code that is written to process multiple records at a time, avoiding governor limits.',
  'declarative': 'Point-and-click configuration instead of writing code.',
  'programmatic': 'Solutions built using code like Apex or LWC.',
  'unmanaged': 'A package that can be modified by the installer.',
  'custom': 'Objects or fields created specifically for your organization.',
  'standard': 'Objects or fields provided out-of-the-box by Salesforce.',
  
  // Conjunctions
  'because': 'For the reason that.',
  'since': 'For the reason that; because.',
  'due to the fact that': 'Because (formal).',
  'therefore': 'For that reason; consequently.',
  'as a result': 'Because of something that has happened.',
  'consequently': 'As a result.',
  'furthermore': 'In addition; besides.',
  'moreover': 'As a further matter; besides.',
  'additionally': 'As an extra factor or circumstance.',
  'however': 'Used to introduce a statement that contrasts with something just said.',
  'although': 'In spite of the fact that; even though.',
  'nevertheless': 'In spite of that; notwithstanding.',
  
  // Verbs
  'deployed': 'Moved metadata or code from one environment to another.',
  'queried': 'Retrieved data from the database using SOQL.',
  'bulkified': 'Updated code to handle collections of records instead of single records.',
  'configured': 'Set up declarative features like Profiles or Flows.',
  'debugged': 'Identified and removed errors from code using debug logs.',
  'refactored': 'Restructured existing computer code without changing its external behavior.'
};

const vocab = {
  timePast: ['Yesterday', 'Last week', 'This morning', 'During the last sprint', 'In Q3', 'At the standup'],
  timePresent: ['Today', 'Right now', 'Currently', 'This sprint', 'At the moment'],
  timeFuture: ['Tomorrow', 'Next week', 'Later today', 'In Q4', 'By end of day'],
  
  verbPast: ['fixed', 'built', 'tested', 'ran', 'checked', 'created', 'updated', 'deployed', 'queried', 'bulkified', 'configured', 'debugged', 'refactored', 'assigned'],
  verbPresentProg: ['am fixing', 'am building', 'am testing', 'am running', 'am checking', 'am creating', 'am updating', 'am deploying', 'am querying', 'am bulkifying', 'am configuring', 'am debugging', 'am refactoring', 'am assigning'],
  verbPresent: ['triggers', 'runs', 'loads', 'extracts', 'cleans', 'fails', 'scales', 'audits', 'approves', 'aligns'],
  verbFuture: ['will fix', 'will build', 'will test', 'will run', 'will check', 'will create', 'will update', 'will deploy', 'will query', 'will bulkify', 'will configure', 'will debug', 'will refactor', 'will assign'],
  
  adjective: ['broken', 'slow', 'failing', 'critical', 'massive', 'missing', 'legacy', 'flaky', 'bulkified', 'declarative', 'programmatic', 'custom', 'standard', 'uncaught'],
  badAdjective: ['broked', 'slowing', 'faileds', 'criticals', 'massively', 'missed', 'legacies', 'bulkifieds', 'declaratives', 'programmatics'],
  
  noun: ['Apex class', 'LWC', 'Trigger', 'SOQL query', 'Sandbox', 'Governor Limit', 'Profile', 'Permission Set', 'Flow', 'Custom Object', 'Validation Rule', 'deployment', 'test class', 'debug log', 'managed package', 'scratch org'],
  
  reason: ['we hit a Governor Limit', 'a Validation Rule failed', 'the Sandbox is out of sync', 'permissions are wrong', 'the test class coverage is too low', 'we are waiting on package installation', 'the SOQL query is not selective', 'the requirements are ambiguous', 'there is an unhandled exception in the Trigger', 'the Flow is causing a recursive update'],
  
  person: ['the QA team', 'my manager', 'the Admin', 'the Solution Architect', 'the Product Manager', 'the stakeholders', 'the client', 'the junior developers'],
  
  conjunctionCause: ['because', 'since', 'due to the fact that'],
  conjunctionEffect: ['therefore', 'so', 'as a result', 'consequently'],
  conjunctionAdd: ['furthermore', 'moreover', 'additionally', 'also'],
  conjunctionContrast: ['however', 'although', 'nevertheless']
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getIncorrect = (arr, correct, count = 3) => {
  const others = arr.filter(item => item !== correct);
  const shuffled = others.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Extracts meanings for any complex words found in the texts
const extractDefinitions = (textArray) => {
  const text = textArray.join(' ').toLowerCase();
  const defs = [];
  for (const [word, meaning] of Object.entries(vocabDefinitions)) {
    // Basic word boundary matching for safety
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(text)) {
      defs.push({ word, meaning });
    }
  }
  return defs;
};

  export const generateDailyLoop = () => {
  return [
    generateSentenceBuilder(),
    generateStandupRush(),
    generatePipelineStoryteller(),
    generateClientReaction(),
    generateGovernorLimitsSurvivor()
  ];
};

export const generateSingleRandomQuestion = (mode = 'mixed') => {
  let selectedGame;
  
  if (mode === 'sentence_builder') {
    selectedGame = generateSentenceBuilder;
  } else if (mode === 'standup_rush') {
    selectedGame = generateStandupRush;
  } else if (mode === 'pipeline_story') {
    selectedGame = generatePipelineStoryteller;
  } else if (mode === 'client_reaction') {
    selectedGame = generateClientReaction;
  } else if (mode === 'governor_limits') {
    selectedGame = generateGovernorLimitsSurvivor;
  } else if (mode === 'tenses') {
    selectedGame = generateTenseQuestion;
  } else if (mode === 'verbs') {
    selectedGame = generateVerbQuestion;
  } else if (mode === 'adjectives') {
    selectedGame = generateAdjectivesQuestion;
  } else if (mode === 'conjunctions') {
    selectedGame = generateConjunctionQuestion;
  } else {
    const games = [
      generateSentenceBuilder,
      generateStandupRush,
      generatePipelineStoryteller,
      generateClientReaction,
      generateGovernorLimitsSurvivor,
      generateTenseQuestion,
      generateVerbQuestion,
      generateAdjectivesQuestion,
      generateConjunctionQuestion
    ];
    selectedGame = pick(games);
  }
  
  return selectedGame();
};

function generateTenseQuestion() {
  const tenses = ['past', 'presentContinuous', 'future'];
  const tense = pick(tenses);
  
  let time, correctVerb, wrongVerbs;
  const noun = pick(vocab.noun);
  
  if (tense === 'past') {
    time = pick(vocab.timePast);
    correctVerb = pick(vocab.verbPast);
    wrongVerbs = [pick(vocab.verbPresentProg), pick(vocab.verbFuture), 'fix', 'fixing'];
  } else if (tense === 'presentContinuous') {
    time = pick(vocab.timePresent);
    correctVerb = pick(vocab.verbPresentProg);
    wrongVerbs = [pick(vocab.verbPast), pick(vocab.verbFuture), 'work', 'worked'];
  } else {
    time = pick(vocab.timeFuture);
    correctVerb = pick(vocab.verbFuture);
    wrongVerbs = [pick(vocab.verbPast), pick(vocab.verbPresentProg), 'fixed'];
  }
  
  const options = [correctVerb, ...wrongVerbs.slice(0, 3)].sort(() => 0.5 - Math.random());
  const sentence = `${time}, I _____ the ${noun}.`;
  
  return {
    gameType: 'fill_blank',
    title: 'Tenses',
    instruction: 'Select the correct verb tense for the sentence.',
    sentence,
    options,
    correctAnswer: correctVerb,
    explanation: `The time marker "${time}" requires the ${tense} tense.`,
    definitions: extractDefinitions([sentence, correctVerb])
  };
}

function generateVerbQuestion() {
  const noun = pick(vocab.noun);
  const correctVerb = pick(vocab.verbPast);
  const options = [correctVerb, pick(vocab.noun), pick(vocab.adjective), pick(vocab.timePast)].sort(() => 0.5 - Math.random());
  
  const sentence = `I successfully _____ the ${noun} to resolve the issue.`;
  return {
    gameType: 'fill_blank',
    title: 'Verbs (Action Words)',
    instruction: 'Identify the correct action verb to complete the thought.',
    sentence,
    options,
    correctAnswer: correctVerb,
    explanation: `A sentence needs an action verb to describe what you did. "${correctVerb}" is the correct verb here.`,
    definitions: extractDefinitions([sentence, correctVerb])
  };
}

function generateAdjectivesQuestion() {
  const noun = pick(vocab.noun);
  const correctAdj = pick(vocab.adjective);
  const wrongAdjs = getIncorrect([...vocab.adjective, ...vocab.badAdjective], correctAdj, 3);
  const options = [correctAdj, ...wrongAdjs].sort(() => 0.5 - Math.random());
  
  const sentence = `We noticed the ${noun} was very _____, so we addressed it.`;
  return {
    gameType: 'fill_blank',
    title: 'Adjectives',
    instruction: 'Select the correct adjective to describe the noun.',
    sentence,
    options,
    correctAnswer: correctAdj,
    explanation: `Adjectives describe nouns. "${correctAdj}" is the correct descriptive word here.`,
    definitions: extractDefinitions([sentence, correctAdj])
  };
}

function generateConjunctionQuestion() {
  const types = ['effect', 'contrast', 'add'];
  const type = pick(types);
  
  let sentence, correct, wrong;
  const adj = pick(vocab.adjective);
  const noun = pick(vocab.noun);
  
  if (type === 'effect') {
    sentence = `The ${noun} was ${adj}; _____, we had to act quickly.`;
    correct = pick(vocab.conjunctionEffect);
    wrong = [...vocab.conjunctionContrast, ...vocab.conjunctionAdd];
  } else if (type === 'contrast') {
    sentence = `The ${noun} was ${adj}; _____, we still deployed it successfully.`;
    correct = pick(vocab.conjunctionContrast);
    wrong = [...vocab.conjunctionEffect, ...vocab.conjunctionAdd];
  } else {
    sentence = `We fixed the ${noun}. _____, we improved code coverage by 20%.`;
    correct = pick(vocab.conjunctionAdd);
    wrong = [...vocab.conjunctionContrast, ...vocab.conjunctionCause];
  }
  
  const options = [correct, ...getIncorrect(wrong, correct, 3)].sort(() => 0.5 - Math.random());
  
  return {
    gameType: 'fill_blank',
    title: 'Conjunctions',
    instruction: 'Choose the correct joiner to link these thoughts.',
    sentence,
    options,
    correctAnswer: correct,
    explanation: `Use "${correct}" here to show ${type} between the two ideas.`,
    definitions: extractDefinitions([sentence, correct])
  };
}

function generateSentenceBuilder() {
  const time = pick(vocab.timePast);
  const verb = pick(vocab.verbPast);
  const noun = pick(vocab.noun);
  
  const sentence = `${time}, I ${verb} the ${noun}.`;
  const rawWords = sentence.split(' ');
  let words = rawWords.map((w, i) => i === 0 ? w : w.toLowerCase());
  
  return {
    gameType: 'sentence_builder',
    title: 'Sentence Builder',
    instruction: 'Drag and drop words to assemble the correct sentence.',
    correctSentence: sentence,
    words,
    explanation: 'Basic structure: Time + Subject + Verb + Object.',
    definitions: extractDefinitions([sentence])
  };
}

function generateStandupRush() {
  const taskPast = `I ${pick(vocab.verbPast)} the ${pick(vocab.noun)}`;
  const taskPresent = `I ${pick(vocab.verbPresentProg)} the ${pick(vocab.noun)}`;
  const blocker = `I am blocked because ${pick(vocab.reason)}`;
  
  return {
    gameType: 'standup_rush',
    title: 'Standup Rush',
    instruction: 'You have 30 seconds! Read the prompts below and SPEAK your update out loud.',
    prompts: [
      { label: 'Yesterday:', hint: taskPast },
      { label: 'Today:', hint: taskPresent },
      { label: 'Blocker:', hint: blocker }
    ],
    explanation: 'A strong standup update is concise: Yesterday, Today, and Blockers.',
    definitions: extractDefinitions([taskPast, taskPresent, blocker])
  };
}

function generatePipelineStoryteller() {
  // Generate a dynamic story logic from millions of permutations
  const type = Math.random();
  let sentences = [];
  
  if (type < 0.33) {
    // Deployment Story
    sentences = [
      `First, I created the ${pick(vocab.noun)} in the Sandbox.`,
      `Next, I wrote the test class to ensure 75% coverage.`,
      `After that, the code was ${pick(vocab.verbPast)} and reviewed.`,
      `Finally, we deployed it using the metadata API.`
    ];
  } else if (type < 0.66) {
    // Incident Story
    sentences = [
      `Initially, the ${pick(vocab.noun)} failed in production.`,
      `${pick(vocab.conjunctionCause)}, the ${pick(vocab.person)} escalated the issue.`,
      `Then, we ${pick(vocab.verbPast)} the Trigger to avoid hitting Governor Limits.`,
      `Ultimately, we deployed a hotfix to restore functionality.`
    ];
  } else {
    // Lead Story
    sentences = [
      `First, we analyzed the ${pick(vocab.adjective)} architecture.`,
      `However, ${pick(vocab.reason)}.`,
      `${pick(vocab.conjunctionEffect)}, we prioritized declarative tools like Flows over Apex.`,
      `Finally, I aligned with the ${pick(vocab.person)} on the new design.`
    ];
  }
  
  return {
    gameType: 'pipeline_story',
    title: 'Storyteller (KT & Updates)',
    instruction: 'Select sentences in logical order using the transition words.',
    sentences,
    explanation: 'Sequential transition words help guide the listener through complex processes, whether you are a developer or an architect.',
    definitions: extractDefinitions(sentences)
  };
}

function generateClientReaction() {
  const types = ['delay', 'request', 'issue'];
  const type = pick(types);
  
  let scenario, options;
  
  if (type === 'delay') {
    scenario = `Client asks: "Why is the ${pick(vocab.noun)} taking so long to load?"`;
    options = [
      { text: `It is slow because ${pick(vocab.reason)}.`, feedback: "Poor grammar and sounds too defensive.", isCorrect: false },
      { text: `We are fixing the ${pick(vocab.noun)} today.`, feedback: "Okay grammar, but incomplete explanation.", isCorrect: false },
      { text: `We noticed the SOQL query was not selective, so we are refactoring it to improve performance.`, feedback: "Perfect! You identified the problem and provided a clear, impactful solution.", isCorrect: true }
    ];
  } else if (type === 'request') {
    scenario = `${pick(vocab.person)} says: "I need you to build a complex UI using LWC by tomorrow."`;
    options = [
      { text: "No, we are busy.", feedback: "Grammatically correct, but terrible stakeholder management.", isCorrect: false },
      { text: `The team is currently at capacity; ${pick(vocab.conjunctionContrast)}, if we deprioritize the ${pick(vocab.noun)}, we can focus on this LWC.`, feedback: "Excellent! You stated the constraint and offered a clear negotiation path.", isCorrect: true },
      { text: "We will try to do everything.", feedback: "Dangerous! Over-promising leads to burnout and missed deadlines.", isCorrect: false }
    ];
  } else {
    scenario = `Architect asks: "Why did the deployment fail yesterday?"`;
    options = [
      { text: `We reviewed the debug logs and found a failing test class, ${pick(vocab.conjunctionEffect)} we updated the mock data.`, feedback: "Great response! You showed initiative, found the root cause, and presented a clear action plan.", isCorrect: true },
      { text: "Because the code coverage is too low now.", feedback: "Too simplistic and doesn't offer a solution or plan of action.", isCorrect: false },
      { text: `I don't know, maybe the Admin changed a Validation Rule.`, feedback: "Never deflect blame blindly in professional communication.", isCorrect: false }
    ];
  }
  
  return {
    gameType: 'client_reaction',
    title: 'Professional Scenarios (RPG)',
    instruction: 'Choose the most professional and grammatically correct response.',
    scenario: scenario,
    options: options.sort(() => 0.5 - Math.random()),
    explanation: 'When speaking to stakeholders, clients, or leadership, use clear grammar and always focus on solutions, trade-offs, or collaboration.',
    definitions: extractDefinitions([scenario, ...options.map(o => o.text)])
  };
}

function generateGovernorLimitsSurvivor() {
  const limits = [
    {
      scenario: 'You need to update 5,000 Contact records based on a change to their parent Account.',
      options: [
        { text: 'Use a SOQL query inside a for-loop to get each Contact.', isCorrect: false, feedback: 'Never put SOQL inside a loop! You will hit the 100 SOQL queries limit.' },
        { text: 'Query all 5,000 Contacts into a List, then update the List using a single DML statement.', isCorrect: true, feedback: 'Correct! Bulkifying your DML operations is key to surviving Governor Limits.' },
        { text: 'Use a Future method for each Contact.', isCorrect: false, feedback: 'You can only have 50 future method invocations per transaction. You would hit a limit instantly.' }
      ],
      explanation: 'Always bulkify your code in Salesforce to avoid hitting the 150 DML statements or 100 SOQL queries limit.'
    },
    {
      scenario: 'You are writing an Apex trigger that processes a large JSON payload from an external API.',
      options: [
        { text: 'Parse the entire JSON string into a massive Map in memory.', isCorrect: false, feedback: 'You risk hitting the 6MB synchronous Heap Size limit.' },
        { text: 'Use JSONParser to read the stream token-by-token.', isCorrect: true, feedback: 'Correct! Streaming the JSON keeps your heap size small and compliant.' },
        { text: 'Just increase the Heap Size limit in setup.', isCorrect: false, feedback: 'Governor Limits are hard limits; you cannot just increase them in Setup!' }
      ],
      explanation: 'Heap size limits (6MB sync, 12MB async) require you to process large data efficiently using streaming APIs when possible.'
    },
    {
      scenario: 'Your transaction takes too long and fails with a "Maximum CPU time: 10000" error.',
      options: [
        { text: 'Move the heavy processing logic to a Queueable or Batch Apex class.', isCorrect: true, feedback: 'Correct! Asynchronous Apex gives you 60,000 ms of CPU time instead of 10,000 ms.' },
        { text: 'Add Thread.sleep() to pause the transaction and cool down the CPU.', isCorrect: false, feedback: 'Apex does not have Thread.sleep(), and pausing does not reset the CPU timer.' },
        { text: 'Break the logic into multiple smaller triggers on the same object.', isCorrect: false, feedback: 'Multiple triggers still run in the same transaction context and share the same CPU time limit.' }
      ],
      explanation: 'CPU limits (10s sync, 60s async) are often mitigated by moving heavy lifting to asynchronous processes.'
    }
  ];

  const question = pick(limits);

  return {
    gameType: 'client_reaction', // Reuse the client_reaction UI component for multiple choice
    title: 'Governor Limits Survivor 🛑',
    instruction: 'Select the best architectural choice to avoid hitting Governor Limits.',
    scenario: question.scenario,
    options: question.options.sort(() => 0.5 - Math.random()),
    explanation: question.explanation,
    definitions: extractDefinitions([question.scenario, ...question.options.map(o => o.text)])
  };
}
