export const interviewQuestions = [
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
      { text: 'I heavily utilized Lightning Data Service (LDS) for caching and used @wire to reduce Apex calls.', isCorrect: true, feedback: 'Excellent answer. Caching and LDS are best practices for LWC performance.' },
      { text: 'I bypassed the Apex controller and wrote direct SOQL inside the JavaScript.', isCorrect: false, feedback: 'You cannot write direct SOQL in LWC JavaScript.' },
      { text: 'I put all components into a single massive Aura wrapper.', isCorrect: false, feedback: 'This would degrade performance and defeat the purpose of modular LWC.' }
    ],
    explanation: 'Lightning Data Service (LDS) handles data caching and synchronization automatically, reducing the need for custom Apex controllers and improving performance.'
  },
  {
    scenario: 'VP of Product: "You worked with Agentforce and Einstein Copilot. What is the main advantage of using these over a 3rd party AI?"',
    options: [
      { text: 'They are natively integrated into the Salesforce Trust Layer, meaning our CRM data never leaves the ecosystem.', isCorrect: true, feedback: 'Correct! The Einstein Trust Layer is the biggest selling point for enterprise clients.' },
      { text: 'They are completely free and have no limits.', isCorrect: false, feedback: 'Salesforce AI features are absolutely not free and are subject to usage limits.' },
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
  },
  {
    scenario: 'Solution Architect: "In the Healthcare App, you needed to expose a custom endpoint. Why did you use @RestResource instead of a standard Flow endpoint?"',
    options: [
      { text: 'We needed to accept a deeply nested, complex JSON payload and apply complex validation logic before inserting.', isCorrect: true, feedback: 'Perfect. Custom REST APIs are best for complex data manipulation.' },
      { text: 'Flows cannot be triggered by external systems at all.', isCorrect: false, feedback: 'Incorrect. Platform events and inbound messages can trigger flows.' },
      { text: 'Apex REST APIs don’t count towards API governor limits.', isCorrect: false, feedback: 'All inbound API calls count towards your org API limits.' }
    ],
    explanation: 'While flows can be invoked via standard API endpoints, @RestResource allows for highly customized deserialization of complex JSON payloads and complex transactional logic.'
  },
  {
    scenario: 'Hiring Manager: "You used Batch Apex for a data migration. How did you maintain state between the execute batches?"',
    options: [
      { text: 'I implemented the Database.Stateful interface in the class definition.', isCorrect: true, feedback: 'Spot on! This is how you persist variables across batch chunks.' },
      { text: 'I used a static variable in the helper class.', isCorrect: false, feedback: 'Static variables are reset between each batch execute context.' },
      { text: 'I stored the state in a Custom Setting during the start method.', isCorrect: false, feedback: 'While possible, using Database.Stateful is the standard and most efficient way.' }
    ],
    explanation: 'By default, Batch Apex is stateless. Implementing Database.Stateful allows instance variables to retain their values across all execute methods.'
  },
  {
    scenario: 'Senior Dev: "What is the primary difference between a Component Event and an Application Event in Aura?"',
    options: [
      { text: 'Component events bubble up the containment hierarchy, while Application events broadcast to all listening components.', isCorrect: true, feedback: 'Exactly. Though LWC now uses standard DOM events, understanding Aura events is critical for legacy support.' },
      { text: 'Application events are faster than Component events.', isCorrect: false, feedback: 'Application events actually have more overhead.' },
      { text: 'Component events can only pass strings, while Application events can pass Objects.', isCorrect: false, feedback: 'Both event types can pass complex data structures via attributes.' }
    ],
    explanation: 'Component events use a bubble/capture phase (like standard DOM events), while Application events follow a publish/subscribe model that broadcasts across the entire application.'
  },
  {
    scenario: 'Tech Lead: "You used LWC for the Enterprise App. How did you communicate from a child component up to a parent component?"',
    options: [
      { text: 'I dispatched a CustomEvent from the child and handled it declaratively in the parent’s HTML.', isCorrect: true, feedback: 'Correct! This aligns with standard web component standards.' },
      { text: 'I used a pubsub module for all parent-child communication.', isCorrect: false, feedback: 'Pubsub or LMS should be reserved for sibling or unrelated component communication, not direct parent-child.' },
      { text: 'I used the @api decorator on a property in the parent.', isCorrect: false, feedback: '@api is used to pass data DOWN from parent to child, not UP.' }
    ],
    explanation: 'In LWC, data flows down via @api properties, and events flow up via CustomEvents.'
  },
  {
    scenario: 'Security Reviewer: "How did you ensure your Apex code enforces the running user\'s permissions?"',
    options: [
      { text: 'I used the `WITH USER_MODE` clause in SOQL and checked `Schema.sObjectType.Field.isAccessible()`.', isCorrect: true, feedback: 'Great! Enforcing FLS and Object permissions is critical.' },
      { text: 'I declared the class as `with sharing`.', isCorrect: false, feedback: '`with sharing` only enforces record-level sharing rules, not object or field-level security (FLS).' },
      { text: 'Salesforce automatically enforces all permissions in Apex.', isCorrect: false, feedback: 'Incorrect. Apex runs in system context by default (except for sharing rules if specified).' }
    ],
    explanation: 'Apex runs in System Context by default, bypassing Field-Level Security (FLS) and Object permissions. You must explicitly enforce them using `WITH USER_MODE` or `Schema.DescribeFieldResult`.'
  },
  {
    scenario: 'Architect: "What happens if a DML operation fails halfway through a Bulk API transaction?"',
    options: [
      { text: 'By default, the Bulk API uses partial success; valid records process, and failed records return errors.', isCorrect: true, feedback: 'Correct! The Bulk API is designed to maximize throughput via partial success.' },
      { text: 'The entire batch is automatically rolled back.', isCorrect: false, feedback: 'Bulk API does not roll back the entire batch unless explicitly designed to do so (which is rare).' },
      { text: 'The system automatically retries the failed records 3 times.', isCorrect: false, feedback: 'The Bulk API does not auto-retry validation or DML errors.' }
    ],
    explanation: 'The Bulk API inherently supports partial success. Failed records are logged in the result file, while successful records are committed.'
  },
  {
    scenario: 'Interviewer: "When would you choose Custom Metadata Types over Custom Settings?"',
    options: [
      { text: 'When I need to deploy the actual configuration records between environments via Change Sets or Flosum.', isCorrect: true, feedback: 'Exactly. Custom Metadata records are deployable metadata.' },
      { text: 'When I need to update the values frequently via Apex DML.', isCorrect: false, feedback: 'Custom Metadata cannot be updated via standard DML, only via the Metadata API.' },
      { text: 'When I need hierarchical user-specific settings.', isCorrect: false, feedback: 'Hierarchical Custom Settings are better for user/profile specific overrides.' }
    ],
    explanation: 'Custom Metadata Types are deployable as metadata, meaning the records themselves migrate seamlessly between environments without data loader scripts.'
  },
  {
    scenario: 'Team Lead: "How do you handle a scenario where an external system needs to be notified every time an Opportunity is Closed Won?"',
    options: [
      { text: 'Publish a Platform Event from a Flow or Trigger, and have the external system subscribe via CometD or EMP Connector.', isCorrect: true, feedback: 'Perfect! Event-driven architecture is highly scalable.' },
      { text: 'Write a Before-Update Trigger to make a synchronous HTTP callout.', isCorrect: false, feedback: 'You cannot make synchronous callouts from a trigger; it will block the database thread.' },
      { text: 'Send an Outbound Message.', isCorrect: false, feedback: 'While possible, Outbound Messages are legacy SOAP technology and less flexible than Platform Events.' }
    ],
    explanation: 'Platform Events decouple the systems and provide a robust, event-driven architecture without locking up synchronous database transactions.'
  },
  {
    scenario: 'Hiring Manager: "What is the significance of the @AuraEnabled(cacheable=true) annotation?"',
    options: [
      { text: 'It allows the method to be wired directly in LWC and caches the response on the client side.', isCorrect: true, feedback: 'Correct! Caching improves UI performance significantly.' },
      { text: 'It prevents the method from consuming governor limits.', isCorrect: false, feedback: 'Cached methods still consume limits when they actually hit the server.' },
      { text: 'It allows the method to perform DML operations.', isCorrect: false, feedback: 'Methods annotated with cacheable=true explicitly CANNOT perform DML.' }
    ],
    explanation: 'Client-side caching drastically improves LWC performance but requires that the Apex method only reads data (no DML allowed).'
  }
];

export const governorLimitsQuestions = [
  {
    scenario: 'You need to update 5,000 Contact records based on a change to their parent Account.',
    options: [
      { text: 'Query all 5,000 Contacts into a List, then update the List using a single DML statement.', isCorrect: true, feedback: 'Correct! Bulkifying your DML operations is key to surviving Governor Limits.' },
      { text: 'Use a SOQL query inside a for-loop to get each Contact.', isCorrect: false, feedback: 'Never put SOQL inside a loop! You will hit the 100 SOQL queries limit.' },
      { text: 'Use a Future method for each Contact.', isCorrect: false, feedback: 'You can only have 50 future method invocations per transaction. You would hit a limit instantly.' }
    ],
    explanation: 'Always bulkify your code in Salesforce to avoid hitting the 150 DML statements or 100 SOQL queries limit.'
  },
  {
    scenario: 'You are writing an Apex trigger that processes a large JSON payload from an external API.',
    options: [
      { text: 'Use JSONParser to read the stream token-by-token.', isCorrect: true, feedback: 'Correct! Streaming the JSON keeps your heap size small and compliant.' },
      { text: 'Parse the entire JSON string into a massive Map in memory.', isCorrect: false, feedback: 'You risk hitting the 6MB synchronous Heap Size limit.' },
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
  },
  {
    scenario: 'You are receiving a "MIXED_DML_OPERATION" error when testing your user provisioning code.',
    options: [
      { text: 'Separate the setup object DML (like User or Group) from non-setup object DML by using a @future method.', isCorrect: true, feedback: 'Perfect! Setup and non-setup objects cannot be modified in the same synchronous transaction.' },
      { text: 'Run the test code as a System Admin.', isCorrect: false, feedback: 'Admin permissions do not bypass the Mixed DML governor limit rule.' },
      { text: 'Use a try/catch block to ignore the error.', isCorrect: false, feedback: 'Catching the error doesn’t fix the underlying limit violation.' }
    ],
    explanation: 'Salesforce prevents updating Setup objects (like User, Profile) and non-setup objects (like Account) in the same transaction to prevent security anomalies.'
  },
  {
    scenario: 'Your batch job fails because you hit the "Too many callouts: 101" limit inside the execute method.',
    options: [
      { text: 'Reduce your batch size so each execute chunk performs fewer than 100 callouts.', isCorrect: true, feedback: 'Correct. The 100 callout limit applies per transaction (i.e., per execute chunk).' },
      { text: 'Switch from Batch Apex to Queueable Apex.', isCorrect: false, feedback: 'Queueable Apex also has a 100 callout limit per transaction.' },
      { text: 'Combine all HTTP callouts into a single bulkified HTTP callout.', isCorrect: false, feedback: 'While bulkifying API endpoints is good, you can simply lower the batch size via Database.executeBatch(job, 50).' }
    ],
    explanation: 'In Batch Apex, governor limits are reset for every `execute` chunk. Lowering the batch scope size prevents hitting the 100 callout limit.'
  },
  {
    scenario: 'You have a trigger on Account that queries Contacts, Cases, and Opportunities separately inside a loop.',
    options: [
      { text: 'Use a single SOQL query with subqueries (parent-to-child) outside the loop.', isCorrect: true, feedback: 'Correct! This heavily reduces the number of SOQL queries.' },
      { text: 'Move the queries to a helper class.', isCorrect: false, feedback: 'Moving them to a helper class doesn’t stop them from executing inside the loop.' },
      { text: 'Increase the SOQL query limit to 200 in the settings.', isCorrect: false, feedback: 'The synchronous SOQL limit is fixed at 100.' }
    ],
    explanation: 'Always bulkify SOQL queries. Using parent-to-child subqueries allows you to retrieve related data without blowing through the 100 query limit.'
  },
  {
    scenario: 'You get a "UNABLE_TO_LOCK_ROW" error during a data load into a highly skewed parent Account.',
    options: [
      { text: 'Sort the child records by parent ID before loading, or reduce the batch size.', isCorrect: true, feedback: 'Correct. Sorting prevents multiple threads from trying to lock the same parent Account simultaneously.' },
      { text: 'Disable all validation rules on the Account.', isCorrect: false, feedback: 'Validation rules do not cause row locking.' },
      { text: 'Use a Future method instead.', isCorrect: false, feedback: 'Future methods can still cause row locks if they execute concurrently.' }
    ],
    explanation: 'Row locks occur when multiple transactions try to update the same record (or a parent record due to roll-up summaries) at the same time.'
  }
];

export const rpgScenarios = [
  {
    scenario: `During a KT Session, a Stakeholder asks: "How can we improve customer service automation in the Healthcare App using AI?"`,
    options: [
      { text: `We can leverage Agentforce and Einstein Copilot to build autonomous AI agents that act directly on our Service Cloud data.`, isCorrect: true, feedback: 'Perfect! You suggested a modern, scalable Salesforce AI solution.' },
      { text: `We can just buy a generic chatbot and plug it in.`, isCorrect: false, feedback: 'Generic chatbots aren\'t tailored to Salesforce CRM data.' },
      { text: `We should write a massive Apex trigger to parse emails and reply automatically.`, isCorrect: false, feedback: 'Too programmatic and hard to maintain.' }
    ]
  },
  {
    scenario: `Project Manager: "I need you to build a complex UI using LWC for the Enterprise App by tomorrow."`,
    options: [
      { text: `The team is currently at capacity; however, if we deprioritize the reporting dashboard, we can focus on this LWC.`, isCorrect: true, feedback: 'Excellent! You stated the constraint and offered a clear negotiation path.' },
      { text: `No, we are busy.`, isCorrect: false, feedback: 'Grammatically correct, but terrible stakeholder management.' },
      { text: `We will try to do everything.`, isCorrect: false, feedback: 'Dangerous! Over-promising leads to burnout and missed deadlines.' }
    ]
  },
  {
    scenario: `Architect asks: "Why did the deployment fail yesterday?"`,
    options: [
      { text: `We reviewed the debug logs and found a failing test class, consequently we updated the mock data and redeployed.`, isCorrect: true, feedback: 'Great response! You showed initiative, found the root cause, and presented a clear action plan.' },
      { text: `Because the code coverage is too low now.`, isCorrect: false, feedback: 'Too simplistic and doesn\'t offer a solution or plan of action.' },
      { text: `I don't know, maybe the Admin changed a Validation Rule.`, isCorrect: false, feedback: 'Never deflect blame blindly in professional communication.' }
    ]
  },
  {
    scenario: `Client: "Why does the Lightning page load so slowly when we open an Account?"`,
    options: [
      { text: `We investigated the network tab and noticed multiple redundant Apex calls. We can optimize this by using cacheable methods and LDS.`, isCorrect: true, feedback: 'Excellent technical analysis combined with a clear architectural solution.' },
      { text: `Salesforce is just slow sometimes.`, isCorrect: false, feedback: 'Unprofessional. You should always investigate performance issues objectively.' },
      { text: `Your computer is probably too old.`, isCorrect: false, feedback: 'Extremely unprofessional.' }
    ]
  },
  {
    scenario: `Junior Developer: "I'm getting a NullPointerException on line 42, but I don't know why."`,
    options: [
      { text: `Let's pair program. We can add a System.debug to inspect the variable, or use the Replay Debugger to step through the execution.`, isCorrect: true, feedback: 'Perfect! You are mentoring effectively and suggesting professional debugging tools.' },
      { text: `Just wrap the whole method in a try-catch block and ignore it.`, isCorrect: false, feedback: 'This hides the error instead of solving the root cause.' },
      { text: `I'll just write the code for you, give me your keyboard.`, isCorrect: false, feedback: 'This doesn\'t help the junior developer learn.' }
    ]
  },
  {
    scenario: `QA Engineer: "The new integration works in Dev, but it's failing in the UAT sandbox with an Unauthorized error."`,
    options: [
      { text: `Let's check the Named Credentials and Auth Providers in UAT. The OAuth tokens might have expired or were not migrated.`, isCorrect: true, feedback: 'Spot on. Integration environment mismatches are almost always authentication related.' },
      { text: `It worked on my machine, so it must be your fault.`, isCorrect: false, feedback: 'The classic bad developer response.' },
      { text: `Let's just hardcode the production password into the Apex class to test it.`, isCorrect: false, feedback: 'Major security violation!' }
    ]
  },
  {
    scenario: `Sales Director: "Can we build a custom app that exports all our customer data to my personal Google Drive every night?"`,
    options: [
      { text: `Due to data security and compliance policies, we cannot export CRM data to personal drives. However, we can build a secure report within Salesforce for you.`, isCorrect: true, feedback: 'Great! You enforced security policies while offering a compliant alternative.' },
      { text: `Sure, I'll build a batch job for that right now.`, isCorrect: false, feedback: 'You just violated major data loss prevention (DLP) policies.' },
      { text: `No, that's a stupid idea.`, isCorrect: false, feedback: 'Aggressive and unprofessional.' }
    ]
  }
];

export const pipelineStoryTemplates = [
  {
    sentences: [
      "First, we held a KT Session to analyze the requirements for the Healthcare App.",
      "Next, I built a Queueable Apex class to integrate with the external system via REST API.",
      "After that, we performed unit testing to ensure 95% code coverage.",
      "Finally, we deployed the changes using Flosum CI/CD pipelines."
    ]
  },
  {
    sentences: [
      "Initially, the legacy process in the Enterprise App was slow and manual.",
      "Because of this, the business stakeholders requested an automated solution during our Standup.",
      "Then, I designed a reusable LWC and automated the backend logic with Record-Triggered Flows.",
      "Ultimately, this streamlined business operations and improved user experience."
    ]
  },
  {
    sentences: [
      "First, we received a critical security alert regarding hardcoded credentials.",
      "Consequently, I refactored the Apex callouts to utilize Named Credentials and Auth Providers.",
      "Next, I ensured all SOQL queries enforced field-level security using WITH USER_MODE.",
      "Finally, the codebase passed the strict automated security audit."
    ]
  },
  {
    sentences: [
      "To start, users complained about hitting CPU timeout limits during bulk uploads.",
      "Upon investigation, I discovered multiple inefficient triggers running synchronously.",
      "Therefore, I refactored the heavy processing logic into a Batch Apex job.",
      "As a result, the data load times improved drastically and limit exceptions ceased."
    ]
  },
  {
    sentences: [
      "Initially, the customer service agents were overwhelmed by repetitive manual tasks.",
      "To address this, we pitched implementing Agentforce to automate level-1 triage.",
      "Next, I configured Einstein Copilot actions to safely update case statuses via the Trust Layer.",
      "Ultimately, this reduced agent handling time by over 30%."
    ]
  },
  {
    sentences: [
      "First, the data migration team reported frequent UNABLE_TO_LOCK_ROW errors.",
      "Because of the severe data skew, multiple threads were trying to update the same parent Account.",
      "To resolve this, I implemented a pre-sorting algorithm in the data pipeline to group child records.",
      "Finally, the migration completed successfully without any row lock contention."
    ]
  }
];
