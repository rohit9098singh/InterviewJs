𝟭. 𝗪𝗵𝗮𝘁 𝗵𝗮𝗽𝗽𝗲𝗻𝘀 𝗶𝗳 𝘆𝗼𝘂 𝗰𝗮𝗹𝗹 𝗮 𝘀𝗲𝘁𝗦𝘁𝗮𝘁𝗲 𝗶𝗻𝘀𝗶𝗱𝗲 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝘄𝗶𝘁𝗵 𝗻𝗼 𝗱𝗲𝗽𝗲𝗻𝗱𝗲𝗻𝗰𝘆 𝗮𝗿𝗿𝗮𝘆?
- Most say "infinite loop" but can you explain exactly WHY and how React's render cycle causes it? That's what they're testing.

𝟮. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗲𝗮𝗿𝗶𝗻𝗴 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼𝗲𝘀 𝗖𝗼𝗻𝗰𝘂𝗿𝗿𝗲𝗻𝘁 𝗠𝗼𝗱𝗲 𝘀𝗼𝗹𝘃𝗲 𝗶𝘁?
- Never heard of it? You're not alone. Tearing happens when UI shows inconsistent data during async renders. This is a senior-level gem.

𝟯. 𝗪𝗵𝗮𝘁'𝘀 𝘁𝗵𝗲 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝘂𝘀𝗲𝗟𝗮𝘆𝗼𝘂𝘁𝗘𝗳𝗳𝗲𝗰𝘁 𝗮𝗻𝗱 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝘄𝗶𝘁𝗵 𝗮 𝗿𝗲𝗮𝗹 𝘂𝘀𝗲 𝗰𝗮𝘀𝗲?
- Hint: It's all about when they fire relative to DOM paint. Most candidates fumble the real-world example.

𝟰. 𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗯𝘂𝗶𝗹𝗱 𝗮 𝗥𝗲𝗮𝗰𝘁 𝗮𝗽𝗽 𝘁𝗵𝗮𝘁 𝘄𝗼𝗿𝗸𝘀 𝗪𝗜𝗧𝗛𝗢𝗨𝗧 𝗮 𝗯𝘂𝗻𝗱𝗹𝗲𝗿?
- Tests your understanding of ESModules, CDN imports, and how React actually works under the hood.

𝟱. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗮 𝗭𝗼𝗺𝗯𝗶𝗲 𝗖𝗵𝗶𝗹𝗱 𝗽𝗿𝗼𝗯𝗹𝗲𝗺 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁-𝗥𝗲𝗱𝘂𝘅?
- It occurs when a child component tries to access a store item that no longer exists. Can you explain how to prevent it?

𝟲. 𝗪𝗵𝘆 𝘀𝗵𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗻𝗲𝘃𝗲𝗿 𝗱𝗲𝗳𝗶𝗻𝗲 𝗮 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 𝗶𝗻𝘀𝗶𝗱𝗲 𝗮𝗻𝗼𝘁𝗵𝗲𝗿 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁?
- Most junior devs do this. Senior devs know it breaks reconciliation and causes subtle, hard-to-debug bugs.

𝟳. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗦𝘁𝗮𝗹𝗲 𝗖𝗹𝗼𝘀𝘂𝗿𝗲 𝗽𝗿𝗼𝗯𝗹𝗲𝗺 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 𝗛𝗼𝗼𝗸𝘀 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗳𝗶𝘅 𝗶𝘁?
- This trips up even experienced devs. If your useEffect is reading old state values, you're likely hitting this.

𝟴. 𝗪𝗵𝗮𝘁 𝗮𝗿𝗲 𝗥𝗲𝗮𝗰𝘁 𝗣𝗼𝗿𝘁𝗮𝗹𝘀 𝗮𝗻𝗱 𝘄𝗵𝗲𝗻 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗔𝗖𝗧𝗨𝗔𝗟𝗟𝗬 𝘂𝘀𝗲 𝘁𝗵𝗲𝗺 𝗶𝗻 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻?
- Hint: Modals, tooltips, and dropdowns that need to escape overflow:hidden parents.


𝟵. 𝗖𝗮𝗻 𝘆𝗼𝘂 𝘂𝘀𝗲 𝗥𝗲𝗮𝗰𝘁 𝘄𝗶𝘁𝗵𝗼𝘂𝘁 𝗝𝗦𝗫? 𝗪𝗵𝘆 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂?
- Yes! React.createElement() is what JSX compiles to. Understanding this shows deep knowledge.

𝟭𝟬. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗛𝘆𝗱𝗿𝗮𝘁𝗶𝗼𝗻 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 𝗮𝗻𝗱 𝘄𝗵𝗮𝘁 𝗰𝗮𝘂𝘀𝗲𝘀 𝗛𝘆𝗱𝗿𝗮𝘁𝗶𝗼𝗻 𝗘𝗿𝗿𝗼𝗿𝘀 𝗶𝗻 𝗡𝗲𝘅𝘁.𝗷𝘀?
- With SSR becoming the norm, this question is showing up in EVERY senior frontend interview right now 