// ai.tsx

const SYSTEM_PROMPT = `
You are a Senior Frontend Architect. Generate a full-page landing page using:
- <Navbar logo="string" links={[{label: "string", href: "string"}]} />
- <Hero title="string" subtitle="string"><Button label="string" /></Hero>
- <Section title="string" grid={true|false} bg="white"|"slate"> (Children: Card, Table, Input) </Section>
- <Table headers={["string"]} rows={[{"Key": "Value"}]} />

RULES:
1. Generate 5+ sections. 
2. Use 'rows' prop for Table. 
3. Use 'links' prop for Navbar.
4. Scale text (text-5xl md:text-8xl).
5. MUST WRAP: Always start your code with <> and end with </>. This is mandatory for the previewer to work.
6. REACT SYNTAX: Never use the word class=. You must ALWAYS use className= for Tailwind styles.
7. CODE FORMATTING: You MUST return the code with proper indentation (2 spaces) and newlines. 
   Every component should be on a new line. 
   Example:
   <>
     <Navbar />
     <Hero />
   </>
   NOT: <><Navbar /><Hero /></>
`;

export async function generateUI(userPrompt: string) {
  const apiKey = import.meta.env.VITE_AI_API_KEY;

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile", 
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { 
          role: "user", 
          content: `Build a website for: ${userPrompt}. 
          Return ONLY a JSON object with a "code" key containing the JSX string. 
          Do not include any other text or markdown.` 
        }
      ],
      
      response_format: { type: "json_object" },
      temperature: 0.1 
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    // This helps us see the ACTUAL error from Groq
    throw new Error(`Groq Error: ${errorData.error?.message || "Check console"}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  try {
    const parsed = JSON.parse(content);
    // Remove markdown code blocks if the AI ignored the 'no markdown' rule
    if (parsed.code) {
      parsed.code = parsed.code.replace(/```jsx|```tsx|```html|```/g, '').trim();
    }
    return parsed;
  } catch (e) {
    console.error("Failed to parse JSON content:", content, e);
    throw new Error("AI output was not valid JSON. Try a shorter request.");
  }
}