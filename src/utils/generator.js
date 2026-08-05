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
  'Agentforce': 'Salesforce framework to build and customize autonomous AI agents.',
  'Einstein Copilot': 'A conversational AI assistant natively integrated into Salesforce.',
  'Flosum': 'A native release management and CI/CD tool built specifically for Salesforce.',
  'Healthcare App': 'An enterprise application built on Service Cloud for the healthcare sector.',
  'Enterprise App': 'A scalable enterprise application built on Sales Cloud.',
  'KT Session': 'Knowledge Transfer session to explain architecture or code to teammates.',
  'Standup': 'A daily meeting to discuss progress, plans, and blockers.',
  'REST API': 'A standardized architecture style for creating web services.',
  'Batch Apex': 'Used for long-running processes with large data volumes.',
  'Queueable Apex': 'Asynchronous Apex that allows you to submit jobs for background processing.',
  
  // Adjectives
  // 'bulkified' is defined below under Verbs to prevent duplicate key warning
  'declarative': 'Point-and-click configuration instead of writing code.',
  'programmatic': 'Solutions built using code like Apex or LWC.',
  'unmanaged': 'A package that can be modified by the installer.',
  'custom': 'Objects or fields created specifically for your organization.',
  'standard': 'Objects or fields provided out-of-the-box by Salesforce.',
  'AI-powered': 'Augmented with Artificial Intelligence capabilities.',
  
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
  'refactored': 'Restructured existing computer code without changing its external behavior.',
  'integrated': 'Connected two or more systems together to share data.',
  'automated': 'Replaced manual tasks with automated processes like Flows or Apex.'
};

const vocab = {
  timePast: ['Yesterday', 'Last week', 'This morning', 'During the last sprint', 'In Q3', 'At the standup', 'A few days ago', 'In the previous release', 'Last month', 'During UAT', 'In the last standup'],
  timePresent: ['Today', 'Right now', 'Currently', 'This sprint', 'At the moment', 'This week', 'In this release cycle', 'During code review'],
  timeFuture: ['Tomorrow', 'Next week', 'Later today', 'In Q4', 'By end of day', 'For the next release', 'After deployment', 'Post go-live', 'During the next sprint'],
  
  verbPast: ['fixed', 'built', 'tested', 'ran', 'checked', 'created', 'updated', 'deployed', 'queried', 'bulkified', 'configured', 'debugged', 'refactored', 'integrated', 'automated', 'migrated', 'optimized', 'designed', 'documented', 'reviewed', 'approved', 'analyzed', 'estimated', 'planned', 'monitored', 'troubleshot', 'resolved', 'implemented', 'customized', 'synchronized'],
  verbPresentProg: ['am fixing', 'am building', 'am testing', 'am running', 'am checking', 'am creating', 'am updating', 'am deploying', 'am querying', 'am bulkifying', 'am configuring', 'am debugging', 'am refactoring', 'am integrating', 'am automating', 'am migrating', 'am optimizing', 'am designing', 'am documenting', 'am reviewing', 'am analyzing', 'am resolving', 'am implementing'],
  verbPresent: ['triggers', 'runs', 'loads', 'extracts', 'cleans', 'fails', 'scales', 'audits', 'approves', 'aligns', 'syncs', 'updates', 'calculates', 'validates', 'integrates', 'automates'],
  verbFuture: ['will fix', 'will build', 'will test', 'will run', 'will check', 'will create', 'will update', 'will deploy', 'will query', 'will bulkify', 'will configure', 'will debug', 'will refactor', 'will integrate', 'will automate', 'will migrate', 'will optimize', 'will design', 'will document', 'will review', 'will implement'],
  
  adjective: ['broken', 'slow', 'failing', 'critical', 'massive', 'missing', 'legacy', 'flaky', 'bulkified', 'declarative', 'programmatic', 'custom', 'standard', 'AI-powered', 'scalable', 'robust', 'efficient', 'optimized', 'secure', 'compliant', 'asynchronous', 'synchronous', 'complex', 'dynamic', 'reusable', 'responsive', 'modular'],
  badAdjective: ['broked', 'slowing', 'faileds', 'criticals', 'massively', 'missed', 'legacies', 'bulkifieds', 'declaratives', 'programmatics', 'scalables', 'robusts', 'efficients'],
  
  noun: ['Apex class', 'LWC', 'Trigger', 'SOQL query', 'Sandbox', 'Governor Limit', 'Profile', 'Permission Set', 'Flow', 'Custom Object', 'Validation Rule', 'deployment', 'test class', 'debug log', 'managed package', 'Agentforce', 'Einstein Copilot', 'Flosum', 'Healthcare App', 'Enterprise App', 'REST API', 'Batch Apex', 'Queueable Apex', 'KT Session', 'Standup', 'Platform Event', 'MuleSoft', 'Change Data Capture', 'Named Credential', 'Custom Metadata', 'Report Type', 'Dashboard', 'List View', 'Experience Cloud', 'Data Loader', 'GitHub Actions', 'Jira', 'Postman', 'Future method', 'Scheduled Apex', 'Omni-Channel', 'Lightning Data Service', 'Aura Component', 'Visualforce page', 'Connected App', 'OAuth flow', 'SAML SSO', 'JWT bearer', 'Canvas App'],
  
  reason: ['we hit a Governor Limit', 'a Validation Rule failed', 'the Sandbox is out of sync', 'permissions are wrong', 'the test class coverage is too low', 'we are waiting on package installation', 'the SOQL query is not selective', 'the requirements are ambiguous', 'there is an unhandled exception in the Trigger', 'the Flow is causing a recursive update', 'the integration partner is down', 'the API credentials expired', 'the OAuth token is invalid', 'the payload is too large', 'we hit the heap size limit', 'the CPU time limit was exceeded', 'a MIXED_DML_OPERATION occurred', 'a UNABLE_TO_LOCK_ROW occurred', 'the deployment failed validation', 'a merge conflict blocked the pipeline'],
  
  person: ['the QA team', 'my manager', 'the Admin', 'the Solution Architect', 'the Product Manager', 'the stakeholders', 'the client', 'the junior developers', 'the release manager', 'the Scrum Master', 'the UX designer', 'the MuleSoft team', 'the data migration team', 'the security review board'],
  
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
  } else if (mode === 'resume_interview') {
    selectedGame = generateResumeInterview;
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
      generateResumeInterview,
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
  const taskPastOptions = [
    `During yesterday's Standup, I mentioned deploying the Enterprise App updates using Flosum`,
    `I bulkified the Trigger for the Healthcare App platform`,
    `I ${pick(vocab.verbPast)} the ${pick(vocab.noun)}`
  ];
  const taskPresentOptions = [
    `I am integrating the REST API for the Healthcare App`,
    `I am configuring Einstein Copilot prompts`,
    `I ${pick(vocab.verbPresentProg)} the ${pick(vocab.noun)}`
  ];
  
  const taskPast = pick(taskPastOptions);
  const taskPresent = pick(taskPresentOptions);
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
    // Healthcare Integration Story
    sentences = [
      `First, we held a KT Session to analyze the requirements for the Healthcare App.`,
      `Next, I built a Queueable Apex class to integrate with the external system via REST API.`,
      `After that, we performed unit testing to ensure 95% code coverage.`,
      `Finally, we deployed the changes using Flosum CI/CD pipelines.`
    ];
  } else if (type < 0.66) {
    // Enterprise App Story
    sentences = [
      `Initially, the legacy process in the Enterprise App was slow and manual.`,
      `Because of this, the business stakeholders requested an automated solution during our Standup.`,
      `Then, I designed a reusable LWC and automated the backend logic with Record-Triggered Flows.`,
      `Ultimately, this streamlined business operations and improved user experience.`
    ];
  } else {
    // General Project Story
    sentences = [
      `First, we analyzed the ${pick(vocab.adjective)} architecture.`,
      `However, ${pick(vocab.reason)}.`,
      `${pick(vocab.conjunctionEffect)}, we prioritized declarative tools like Flows over Apex.`,
      `Finally, I aligned with the ${pick(vocab.person)} on the new design.`
    ];
  }
  
  return {
    gameType: 'pipeline_story',
    title: 'Project Storyteller (Agile Updates)',
    instruction: 'Select sentences in logical order to explain your project implementations.',
    sentences,
    explanation: 'Sequential transition words help guide the listener through complex implementations, especially when describing enterprise projects like Aetna GPS or Google Pragathi.',
    definitions: extractDefinitions(sentences)
  };
}

function generateClientReaction() {
  const types = ['agentforce', 'request', 'issue'];
  const type = pick(types);
  
  let scenario, options;
  
  if (type === 'agentforce') {
    scenario = `During a KT Session, a Stakeholder asks: "How can we improve customer service automation in the Healthcare App using AI?"`;
    options = [
      { text: `We can just buy a generic chatbot and plug it in.`, feedback: "Generic chatbots aren't tailored to Salesforce CRM data.", isCorrect: false },
      { text: `We should write a massive Apex trigger to parse emails and reply automatically.`, feedback: "Too programmatic and hard to maintain. AI is better suited for this.", isCorrect: false },
      { text: `We can leverage Agentforce and Einstein Copilot to build autonomous AI agents that act directly on our Service Cloud data.`, feedback: "Perfect! You suggested a modern, scalable Salesforce AI solution.", isCorrect: true }
    ];
  } else if (type === 'request') {
    scenario = `${pick(vocab.person)} says: "I need you to build a complex UI using LWC for the Enterprise App by tomorrow."`;
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

function generateResumeInterview() {
  const limits = [
    {
      scenario: 'Hiring Manager: "On your resume, you built a Queueable Apex class for the Healthcare App. Why did you choose Queueable over Future methods?"',
      options: [
        { text: 'Queueable allows you to chain jobs and pass complex objects, whereas Future only accepts primitive data types.', isCorrect: true, feedback: 'Correct! This shows deep understanding of asynchronous Apex.' },
        { text: 'Future methods are deprecated in modern Salesforce.', isCorrect: false, feedback: 'Incorrect. Future methods are still widely used and fully supported.' },
        { text: 'Queueable has a higher CPU time limit than Future.', isCorrect: false, feedback: 'Both Queueable and Future methods have a 60,000 ms CPU limit.' }
      ],
      explanation: 'Queueable Apex is preferred when you need to chain jobs, monitor job status (via AsyncApexJob), or pass complex non-primitive types like Lists of sObjects.'
    },
    {
      scenario: 'Technical Architect: "You mentioned using Flosum for CI/CD. How does it handle merge conflicts compared to standard Git?"',
      options: [
        { text: 'Flosum uses an intelligent native UI to resolve XML conflicts, unlike standard Git which requires command-line resolution.', isCorrect: true, feedback: 'Spot on! Flosum excels at Salesforce-specific metadata resolution.' },
        { text: 'Flosum automatically overwrites the oldest code.', isCorrect: false, feedback: 'No enterprise CI/CD tool will blindly overwrite code without review.' },
        { text: 'Flosum does not support branching, so merge conflicts never happen.', isCorrect: false, feedback: 'Flosum absolutely supports branching; conflicts are inevitable in parallel development.' }
      ],
      explanation: 'Flosum is a native Salesforce CI/CD tool that provides a declarative UI for resolving complex XML metadata conflicts.'
    },
    {
      scenario: 'Director of Engineering: "We need to scale our LWC on the Enterprise App. How did you optimize your LWC components?"',
      options: [
        { text: 'I bypassed the Apex controller and wrote direct SOQL inside the JavaScript.', isCorrect: false, feedback: 'You cannot write direct SOQL in LWC JavaScript.' },
        { text: 'I put all components into a single massive Aura wrapper.', isCorrect: false, feedback: 'This would degrade performance and defeat the purpose of modular LWC.' },
        { text: 'I heavily utilized Lightning Data Service (LDS) for caching and used @wire to reduce Apex calls.', isCorrect: true, feedback: 'Excellent answer. Caching and LDS are best practices for LWC performance.' }
      ],
      explanation: 'Lightning Data Service (LDS) handles data caching and synchronization automatically, reducing the need for custom Apex controllers and improving performance.'
    },
    {
      scenario: 'VP of Product: "You worked with Agentforce and Einstein Copilot. What is the main advantage of using these over a 3rd party AI?"',
      options: [
        { text: 'They are completely free and have no limits.', isCorrect: false, feedback: 'Salesforce AI features are absolutely not free and are subject to usage limits.' },
        { text: 'They are natively integrated into the Salesforce Trust Layer, meaning our CRM data never leaves the ecosystem.', isCorrect: true, feedback: 'Correct! The Einstein Trust Layer is the biggest selling point for enterprise clients.' },
        { text: 'They generate code faster than ChatGPT.', isCorrect: false, feedback: 'While helpful, the primary advantage for enterprises is data security, not necessarily raw speed.' }
      ],
      explanation: 'The Einstein Trust Layer ensures that sensitive customer data is masked and not retained by external LLM providers, ensuring enterprise-grade security and compliance.'
    },
    {
      scenario: 'Lead Developer: "Explain how you used Record-Triggered Flows in the Enterprise App to streamline operations."',
      options: [
        { text: 'We used After-Save flows to update related records because they are more efficient for cross-object updates.', isCorrect: true, feedback: 'Correct! After-Save flows are ideal for related record updates.' },
        { text: 'We used Before-Save flows to send outbound emails and callouts.', isCorrect: false, feedback: 'Before-Save flows cannot perform callouts or send emails.' },
        { text: 'We replaced all our LWC UI screens with Record-Triggered Flows.', isCorrect: false, feedback: 'Record-Triggered flows run in the background; Screen Flows are used for UI.' }
      ],
      explanation: 'Before-Save flows are 10x faster for same-record updates, but After-Save flows are required when you need to update related records or access the generated Record Id.'
    }
  ];

  const question = pick(limits);

  return {
    gameType: 'client_reaction', // Reuse the client_reaction UI component for multiple choice
    title: 'Technical Interview (Resume) 🎤',
    instruction: 'Answer the hiring manager\'s question based on your resume experience.',
    scenario: question.scenario,
    options: question.options.sort(() => 0.5 - Math.random()),
    explanation: question.explanation,
    definitions: extractDefinitions([question.scenario, ...question.options.map(o => o.text)])
  };
}
