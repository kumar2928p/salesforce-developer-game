export const projects = [
  'the Healthcare App', 'the Enterprise App', 'the legacy Sales Cloud org', 'our core Service Cloud platform', 
  'the new Community portal', 'the Partner portal', 'the internal HR app', 'the CPQ implementation', 
  'the billing system integration', 'the Field Service Lightning rollout', 'the Einstein Analytics dashboard',
  'the Marketing Cloud connector', 'the B2B Commerce storefront', 'the custom ERP integration', 'the mobile publisher app'
];

export const roles = [
  'Hiring Manager', 'Technical Architect', 'Director of Engineering', 'VP of Product', 
  'Lead Developer', 'Solution Architect', 'Senior Developer', 'Principal Engineer', 
  'Product Manager', 'Release Manager'
];

export const techStacks = [
  { 
    name: 'Queueable Apex', 
    correct: 'It allows for chaining jobs and passing complex objects natively.', 
    wrongs: ['It allows for unlimited CPU time.', 'It bypasses all SOQL limits.', 'It runs completely synchronously.', 'It is deprecated in favor of Future methods.', 'It cannot make API callouts under any circumstances.']
  },
  {
    name: 'Lightning Web Components (LWC)',
    correct: 'It leverages standard Web Components and the Shadow DOM for unparalleled performance.',
    wrongs: ['It runs server-side rendering like Visualforce.', 'It is built entirely on the old Aura framework.', 'It requires writing direct SOQL inside the JavaScript.', 'It cannot communicate with any other components on the page.', 'It relies on jQuery for DOM manipulation.']
  },
  {
    name: 'Batch Apex',
    correct: 'It can process up to 50 million records efficiently by chunking the workload.',
    wrongs: ['It runs synchronously in the main execution thread.', 'It increases the synchronous SOQL limit to 50,000.', 'It allows for immediate real-time UI updates.', 'It completely ignores all governor limits.', 'It executes all records in a single massive database transaction.']
  },
  {
    name: 'Flosum CI/CD',
    correct: 'It provides a native Salesforce UI to intelligently resolve complex XML metadata conflicts.',
    wrongs: ['It completely prevents developers from overwriting each other automatically.', 'It does not support branching or version control.', 'It is just a rebranding of standard Change Sets.', 'It requires writing complex bash scripts to deploy.', 'It only works with unmanaged packages.']
  },
  {
    name: 'Agentforce',
    correct: 'It allows us to build autonomous AI agents that act directly on CRM data securely.',
    wrongs: ['It is a third-party tool that exports all our data to OpenAI.', 'It is completely free and consumes no API calls.', 'It requires writing Python code directly inside Salesforce.', 'It only works for generating basic email templates.', 'It replaces the need for Apex completely.']
  },
  {
    name: 'Platform Events',
    correct: 'It provides a robust, scalable event-driven architecture to decouple systems.',
    wrongs: ['It makes synchronous HTTP callouts that block the database thread.', 'It is exactly the same as legacy Outbound Messages.', 'It allows for synchronous UI refresh without any JavaScript.', 'It can only be published from Apex, never from Flows.', 'It bypasses all Salesforce security models.']
  },
  {
    name: 'Record-Triggered Flows',
    correct: 'After-Save flows are highly efficient for cross-object updates and complex logic.',
    wrongs: ['They run completely asynchronously with a 60-second delay.', 'They require writing Apex controllers to function.', 'They are slower than Process Builder for every scenario.', 'They cannot send emails or trigger external APIs.', 'They automatically bulkify poorly written external code.']
  },
  {
    name: 'Lightning Data Service (LDS)',
    correct: 'It handles caching and synchronization automatically, drastically reducing server calls.',
    wrongs: ['It allows you to bypass Field Level Security in the UI.', 'It writes data directly to external SQL databases.', 'It is only available in Aura, not LWC.', 'It increases the number of Apex calls to the server.', 'It requires a manual refresh action for every database change.']
  },
  {
    name: 'Custom Metadata Types',
    correct: 'They are deployable as metadata, migrating seamlessly between environments without data scripts.',
    wrongs: ['They can be freely updated via standard Apex DML in real-time.', 'They are identical to custom objects but slower.', 'They are meant to store millions of customer records.', 'They cannot be queried via SOQL.', 'They consume standard data storage space instead of metadata space.']
  },
  {
    name: 'Einstein Copilot',
    correct: 'It ensures enterprise data security via the Trust Layer, keeping data inside the ecosystem.',
    wrongs: ['It trains public AI models with our proprietary customer data.', 'It is a standalone app that doesn\'t interact with Salesforce records.', 'It only understands Apex code, not natural language.', 'It completely replaces the need for human administrators.', 'It stores all conversation history unencrypted forever.']
  }
];

export const limitScenarios = [
  {
    setup: 'You need to update 15,000 Contact records based on a daily job.',
    correct: 'Query all Contacts into a List and update the List using a single DML statement, ensuring proper chunking if needed.',
    wrongs: ['Use a SOQL query inside a for-loop to get each Contact one by one.', 'Use a Future method for each Contact.', 'Use a synchronous trigger to update all 15,000 instantly.', 'Just write 15,000 individual update statements.', 'Increase the DML limit in the Salesforce setup menu.']
  },
  {
    setup: 'You are processing a massive 10MB JSON payload from an external API.',
    correct: 'Use JSONParser to read the stream token-by-token to avoid heap size limits.',
    wrongs: ['Parse the entire JSON string into a massive Map in memory.', 'Store the JSON string in a Long Text Area field and parse it later.', 'Ask the external API to email the JSON instead.', 'Convert the JSON to XML before parsing it.', 'Use a standard Regex to extract all variables at once.']
  },
  {
    setup: 'Your Apex transaction is failing with "Maximum CPU time: 10000".',
    correct: 'Move the heavy processing logic to an asynchronous process like Queueable Apex.',
    wrongs: ['Add Thread.sleep() to pause the transaction and cool down the CPU.', 'Break the logic into multiple smaller triggers on the same object.', 'Run the code as a System Administrator.', 'Catch the LimitException in a try-catch block.', 'Use a Before-Save flow instead.']
  },
  {
    setup: 'You get a "MIXED_DML_OPERATION" error when testing user provisioning.',
    correct: 'Separate the setup object DML (like User) from non-setup object DML (like Account) by using a @future method.',
    wrongs: ['Run the test code as a System Admin.', 'Use a try/catch block to ignore the error.', 'Update both objects in the exact same DML statement.', 'Disable all validation rules temporarily.', 'Use a Workflow Rule to update the User instead.']
  },
  {
    setup: 'Your batch job hits "Too many callouts: 101" inside the execute method.',
    correct: 'Reduce your batch size scope so each execute chunk performs fewer than 100 callouts.',
    wrongs: ['Switch from Batch Apex to Queueable Apex.', 'Combine all HTTP callouts into a single synchronous trigger.', 'Wait 10 seconds between each callout.', 'Run the batch job at 2 AM.', 'Ask Salesforce Support to increase your callout limit to 200.']
  },
  {
    setup: 'A trigger on Account queries Contacts and Opportunities inside a for-loop.',
    correct: 'Use a single SOQL query with subqueries (parent-to-child) outside the loop to bulkify.',
    wrongs: ['Move the queries to a helper class inside the loop.', 'Increase the SOQL query limit to 200 in the settings.', 'Use a @future method inside the loop instead.', 'Catch the limit exception and skip the remaining records.', 'Just query all records in the database at once.']
  },
  {
    setup: 'A highly skewed parent Account is causing "UNABLE_TO_LOCK_ROW" errors during data loads.',
    correct: 'Sort the child records by parent ID before loading, or drastically reduce the batch size.',
    wrongs: ['Disable all validation rules on the Account.', 'Use a Future method instead.', 'Write a trigger to automatically unlock the row.', 'Delete the parent Account and recreate it.', 'Use the Bulk API in parallel mode without sorting.']
  }
];

export const rpgSetups = [
  'During a KT Session,',
  'In the middle of sprint planning,',
  'Immediately after a failed deployment,',
  'During a high-stakes client demo,',
  'While debugging a critical production issue,',
  'In a 1-on-1 architecture review,',
  'At the daily Standup,'
];

export const rpgDialogues = [
  {
    quote: '"How can we improve customer service automation using AI?"',
    correct: 'We can leverage Agentforce to build autonomous AI agents that act directly on our CRM data.',
    wrongs: ['We can just buy a generic chatbot and plug it in.', 'We should write a massive Apex trigger to parse emails.', 'AI is a fad, we should just hire more agents.', 'Let\'s export all our data to ChatGPT.']
  },
  {
    quote: '"I need you to build a complex UI using LWC by tomorrow morning."',
    correct: 'The team is currently at capacity; however, if we deprioritize the dashboard, we can focus on this.',
    wrongs: ['No, we are busy.', 'We will try to do everything and work all night.', 'That is impossible, you don\'t understand coding.', 'Sure, I will just copy and paste something from the internet.']
  },
  {
    quote: '"Why did the deployment fail yesterday?"',
    correct: 'We reviewed the debug logs and found a failing test class, consequently we updated the mock data and redeployed.',
    wrongs: ['Because the code coverage is too low now.', 'I don\'t know, maybe the Admin changed a Validation Rule.', 'Salesforce was probably just down.', 'It was the junior developer\'s fault.']
  },
  {
    quote: '"Why does the Lightning page load so slowly when we open an Account?"',
    correct: 'We investigated the network tab and noticed multiple redundant Apex calls. We can optimize this by using cacheable methods and LDS.',
    wrongs: ['Salesforce is just slow sometimes.', 'Your computer is probably too old.', 'We need to switch back to Salesforce Classic.', 'Because there is too much data on the page.']
  },
  {
    quote: '"I am getting a NullPointerException on line 42, but I don\'t know why."',
    correct: 'Let\'s pair program. We can add a System.debug to inspect the variable, or use the Replay Debugger to step through the execution.',
    wrongs: ['Just wrap the whole method in a try-catch block and ignore it.', 'I\'ll just write the code for you, give me your keyboard.', 'You should probably go read the documentation again.', 'Just delete line 42.']
  },
  {
    quote: '"Can we build a custom app that exports all our customer data to my personal Google Drive every night?"',
    correct: 'Due to data security policies, we cannot export CRM data to personal drives. However, we can build a secure report within Salesforce for you.',
    wrongs: ['Sure, I\'ll build a batch job for that right now.', 'No, that\'s a stupid idea.', 'Only if you promise not to share it.', 'I will do it, but don\'t tell the security team.']
  }
];

export const storyFragments = {
  starts: [
    'First, we held a KT Session to analyze the requirements.',
    'Initially, the legacy process was slow and entirely manual.',
    'To begin, we received a critical security alert from the automated audit.',
    'At the start of the sprint, users complained about hitting CPU timeout limits.',
    'Initially, the customer service agents were overwhelmed by repetitive manual tasks.',
    'First, the data migration team reported frequent UNABLE_TO_LOCK_ROW errors.'
  ],
  middles1: [
    'Next, I built a Queueable Apex class to handle the complex integration.',
    'Because of this, the business stakeholders requested an automated, scalable solution.',
    'Consequently, I refactored the Apex callouts to utilize secure Named Credentials.',
    'Upon investigation, I discovered multiple inefficient triggers running synchronously.',
    'To address this, we pitched implementing Agentforce to automate level-1 triage.',
    'Because of the severe data skew, multiple threads were trying to update the same parent Account.'
  ],
  middles2: [
    'After that, we performed unit testing to ensure 95% code coverage.',
    'Then, I designed a reusable LWC and automated the backend logic with Record-Triggered Flows.',
    'Next, I ensured all SOQL queries enforced field-level security using WITH USER_MODE.',
    'Therefore, I refactored the heavy processing logic into a Batch Apex job.',
    'Next, I configured Einstein Copilot actions to safely update case statuses via the Trust Layer.',
    'To resolve this, I implemented a pre-sorting algorithm in the data pipeline to group child records.'
  ],
  ends: [
    'Finally, we deployed the changes successfully using Flosum CI/CD pipelines.',
    'Ultimately, this streamlined business operations and drastically improved user experience.',
    'Finally, the codebase passed the strict security audit without any exceptions.',
    'As a result, the data load times improved drastically and limit exceptions ceased completely.',
    'Ultimately, this reduced agent handling time by over 30% while maintaining compliance.',
    'Finally, the massive data migration completed successfully without any row lock contention.'
  ]
};
