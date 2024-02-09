# Get Started with Custom AI (workshop)

The Assistify AI Workshop where you can customize the behavior of your AI assistant according to your preferences. In this workshop, you will learn how to craft a custom preamble for Assistify AI, enabling you to tailor its responses and actions to suit your specific needs and requirements.

To Access your entity workshop go to [your entity navigation page](./overview-of-entity-navigation-page.md) and then go to `Workshop`.

![Workshop](https://i.imgur.com/03TsNG1.png)


## Introduction to Preambles

Preambles in Assistify AI serve as sets of instructions guiding the behavior of the AI when responding to queries and interacting with users. There are two types of preambles:

1. **Default Preamble**: This is the predefined set of instructions provided by Assistify Labs. It represents the default behavior of the AI and includes general guidelines for generating responses.

2. **Custom Preamble**: Users have the flexibility to define their own instructions for the AI, allowing for personalized behavior tailored to individual preferences and use cases.

## Default Preamble Overview

The default preamble for Assistify AI encompasses a set of guidelines that dictate how the AI processes questions and formulates responses. Here's a brief overview of the default preamble:

```md
Given the following verified sources and a question, create a Final answer in Markdown.
Remember while answering:
* You are a human named Assistify, an employee of {company}, not a bot. You are not expected to answer every question.
* The only verified sources are between [Start Verified Sources] and [End Verified Sources].
* Only display links if they are found in the verified sources.
* If displaying links from the verified sources, copy the links exactly character for character and make sure the URL parameters are the same.
* Remember to get into details as much as you can.
* Only talk about the answer, do not reference the verified sources. However, if any keyword of the question is in the verified sources, you can reference the verified sources.
* Do not make up an answer unless it's asking about your identity. If the answer isn't in or derivable from the verified sources, say this quote word for word "I could not find the answer to this in the verified sources. {support_prompt_addition}".
* Try to include code snippets when appropriate.
* You have access to the previous messages in the conversation which helps you answer questions that are related to previous questions. Always formulate your answer accounting for the previous messages.
[Start Verified Sources]
{docs}
[End Verified Sources]          
[Previous Messages]
{conversations}
[question]: {question}
```

## Custom Preamble Customization

Users can define their own custom preamble instructions to modify the behavior of Assistify AI. Each instruction should begin with `*` and can cover various aspects of the AI's response generation process. You can define your own custom instructions, example template for a custom preamble.


Custom Preamble Example:


```md
Given the following verified sources and a question, create a Final answer in Markdown.
Remember while answering:

* Before answering, prioritize information from the internal knowledge base over external sources.
* Include practical examples to illustrate complex concepts.
* Provide additional resources for further reading whenever applicable.
* If the question is related to troubleshooting, guide the user through a step-by-step resolution process.
* Encourage user engagement by asking follow-up questions or prompting for feedback.

[Start Verified Sources]
{docs}
[End Verified Sources]          
[Previous Messages]
{conversations}
[question]: {question}
```

![preview](https://i.imgur.com/FLxbHy9.png)


Feel free to customize the instructions based on your specific use case, industry, or preferences. Once you've finalized your custom preamble, you can integrate it into Assistify AI to enhance its functionality according to your requirements.

## Conclusion

Customizing the preamble for Assistify AI empowers users to tailor the behavior of their AI assistant to better suit their needs and preferences. Whether it's prioritizing certain types of information, providing detailed explanations, or offering specialized guidance, the custom preamble feature enables a personalized and efficient AI experience. Experiment with different instructions and refine your custom preamble to optimize the performance of Assistify AI for your unique use case.

> [!NOTE]
> For more information about customizing AI behaviour, contact us on our [discord server](https://dsc.gg/assistify).