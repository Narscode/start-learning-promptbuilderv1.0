export interface ContentItem {
  id: string;
  title: string;
  description: string;
  summary: string;
  keyTakeaways: string[];
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'article' | 'video' | 'infographic';
  readTime: string;
  author: string;
  verified: boolean;
  icon: string;
  tags: string[];
  content: string;
  source?: string;
  trending?: boolean;
}

export const contentData: ContentItem[] = [
  {
    id: '1',
    title: 'Understanding AI Ethics: A Foundation',
    description: 'Explore the fundamental principles of AI ethics and their importance in modern technology development.',
    summary: 'This article introduces core concepts in AI ethics, including fairness, accountability, transparency, and human dignity in AI systems.',
    keyTakeaways: [
      'AI ethics focuses on ensuring AI systems are fair, transparent, and accountable',
      'Key principles include non-maleficence, beneficence, autonomy, and justice',
      'Stakeholder involvement is crucial in developing ethical AI frameworks',
      'Regular auditing and assessment of AI systems is essential for maintaining ethical standards'
    ],
    category: 'AI Ethics',
    level: 'Beginner',
    type: 'article',
    readTime: '5 min read',
    author: 'Dr. Sarah Chen',
    verified: true,
    icon: '⚖️',
    tags: ['AI Ethics', 'Fairness', 'Transparency', 'Accountability'],
    source: 'UNESCO AI Ethics Guidelines',
    content: 'Artificial Intelligence ethics is a branch of ethics specifically concerned with moral issues arising from the development and application of artificial intelligence systems. As AI becomes increasingly integrated into our daily lives, understanding these ethical considerations becomes crucial for both developers and users.\n\nThe foundation of AI ethics rests on several key principles:\n\n**Fairness and Non-discrimination**: AI systems should treat all individuals and groups equitably, avoiding bias based on race, gender, age, or other protected characteristics.\n\n**Transparency and Explainability**: Users should understand how AI systems make decisions that affect them. This includes providing clear explanations of algorithmic processes.\n\n**Accountability**: There must be clear responsibility for AI system outcomes, with mechanisms for oversight and remediation when things go wrong.\n\n**Privacy and Data Protection**: AI systems must respect individual privacy rights and handle personal data responsibly.\n\n**Human Agency**: AI should augment rather than replace human decision-making, especially in critical areas like healthcare, criminal justice, and employment.\n\nThese principles guide the development of ethical AI frameworks worldwide, including UNESCO\'s AI Ethics Recommendation, which provides a comprehensive global standard for ethical AI development and deployment.'
  },
  {
    id: '2',
    title: 'Spotting Deepfakes: A Practical Guide',
    description: 'Learn to identify AI-generated deepfake content with practical detection techniques and tools.',
    summary: 'This comprehensive guide teaches you how to identify deepfakes using visual cues, technical analysis, and verification tools.',
    keyTakeaways: [
      'Look for inconsistent lighting, shadows, and reflections in videos',
      'Check for unnatural eye movements and blinking patterns',
      'Use reverse image search and fact-checking tools',
      'Verify sources and cross-reference with reliable news outlets',
      'Be skeptical of sensational or emotionally charged content'
    ],
    category: 'AI Detection',
    level: 'Intermediate',
    type: 'video',
    readTime: '8 min watch',
    author: 'Media Literacy Institute',
    verified: true,
    icon: '🔍',
    tags: ['Deepfakes', 'Detection', 'Media Literacy', 'Verification'],
    source: 'Reuters Fact-Check Unit',
    trending: true,
    content: 'Deepfakes represent one of the most concerning applications of AI technology, using machine learning to create convincing but false audio and video content. As these technologies become more sophisticated, developing skills to identify deepfakes becomes increasingly important.\n\n**Visual Detection Techniques:**\n\n1. **Facial Inconsistencies**: Look for unusual facial proportions, asymmetrical features, or inconsistent aging across the face.\n\n2. **Lighting and Shadows**: Check if lighting on the face matches the environment and if shadows fall naturally.\n\n3. **Eye and Mouth Movements**: Deepfakes often struggle with natural eye movements, blinking patterns, and lip-sync accuracy.\n\n4. **Hair and Clothing**: Look for unrealistic hair movement or clothing that doesn\'t behave naturally.\n\n**Technical Verification:**\n\n- Use reverse image/video search tools\n- Check metadata for manipulation signs\n- Look for compression artifacts or quality inconsistencies\n- Use specialized detection tools when available\n\n**Context Analysis:**\n\nAlways consider the source, timing, and context of suspicious content. Verify through multiple reliable sources before sharing or believing questionable media.'
  },
  {
    id: '3',
    title: 'AI and Marginalized Communities',
    description: 'Examining how AI systems impact different communities and the importance of inclusive AI development.',
    summary: 'This article explores the disproportionate impact of AI systems on marginalized communities and strategies for more inclusive AI.',
    keyTakeaways: [
      'AI systems often perpetuate existing societal biases and inequalities',
      'Marginalized communities face higher risks from biased AI decisions',
      'Diverse teams and inclusive design processes are essential',
      'Community involvement in AI development leads to better outcomes',
      'Regular auditing can help identify and address discriminatory impacts'
    ],
    category: 'AI & Society',
    level: 'Intermediate',
    type: 'article',
    readTime: '10 min read',
    author: 'Dr. Aisha Patel',
    verified: true,
    icon: '🌍',
    tags: ['AI Bias', 'Social Justice', 'Inclusivity', 'Community Impact'],
    source: 'AI Ethics Research Center',
    content: 'The intersection of artificial intelligence and social justice reveals critical challenges that demand urgent attention. AI systems, while promising tremendous benefits, often reflect and amplify existing societal biases, disproportionately affecting marginalized communities.\n\n**Historical Context and Current Challenges:**\n\nAI systems learn from historical data that often contains embedded biases. When these systems are deployed in critical areas like hiring, lending, criminal justice, and healthcare, they can perpetuate discrimination against already vulnerable populations.\n\n**Key Impact Areas:**\n\n1. **Criminal Justice**: Predictive policing algorithms may reinforce racial profiling\n2. **Healthcare**: Diagnostic tools may perform poorly for underrepresented groups\n3. **Employment**: Hiring algorithms may discriminate against certain demographics\n4. **Financial Services**: Credit scoring systems may disadvantage minority communities\n\n**Building Inclusive AI:**\n\n- Diversify AI development teams across all levels\n- Engage affected communities in the design process\n- Implement comprehensive bias testing and auditing\n- Establish feedback mechanisms for affected users\n- Prioritize transparency and accountability in AI deployment\n\nThe path forward requires intentional effort to center equity and inclusion in AI development, ensuring that technological progress benefits all members of society.'
  },
  {
    id: '4',
    title: 'The Future of AI Governance',
    description: 'Exploring emerging frameworks for AI regulation and governance around the world.',
    summary: 'An analysis of current and proposed AI governance frameworks, including the EU AI Act, UNESCO recommendations, and national strategies.',
    keyTakeaways: [
      'Multiple regulatory approaches are emerging globally',
      'Risk-based frameworks are becoming the standard approach',
      'International cooperation is essential for effective AI governance',
      'Balancing innovation with protection remains challenging',
      'Stakeholder engagement is crucial for successful implementation'
    ],
    category: 'Future of AI',
    level: 'Advanced',
    type: 'article',
    readTime: '12 min read',
    author: 'Prof. Maria Rodriguez',
    verified: true,
    icon: '🏛️',
    tags: ['AI Governance', 'Policy', 'Regulation', 'Global Frameworks'],
    source: 'International AI Policy Institute',
    trending: true,
    content: 'The rapid advancement of AI technologies has sparked a global race to develop comprehensive governance frameworks that can keep pace with innovation while protecting fundamental rights and values.\n\n**Current Regulatory Landscape:**\n\n**European Union**: The AI Act represents the world\'s first comprehensive AI regulation, implementing a risk-based approach that categorizes AI systems by their potential for harm.\n\n**United States**: A patchwork of sector-specific regulations combined with executive orders and agency guidance, emphasizing innovation-friendly approaches.\n\n**China**: Comprehensive AI regulations focusing on data security, algorithmic accountability, and social stability.\n\n**Key Governance Principles:**\n\n1. **Risk-Based Assessment**: Regulating AI based on potential impact rather than technology type\n2. **Human Oversight**: Ensuring meaningful human control over high-risk AI decisions\n3. **Transparency Requirements**: Mandating disclosure of AI use in certain contexts\n4. **Accountability Mechanisms**: Establishing clear responsibility chains for AI outcomes\n\n**Challenges and Future Directions:**\n\n- Balancing innovation incentives with protective measures\n- Coordinating across jurisdictions and cultures\n- Adapting to rapidly evolving technologies\n- Ensuring inclusive stakeholder participation in governance processes\n\nThe future of AI governance will likely involve continued experimentation with different approaches, increased international cooperation, and ongoing adaptation to technological developments.'
  },
  {
    id: '5',
    title: 'Data Privacy in the AI Age',
    description: 'Understanding how AI systems use personal data and protecting your privacy rights.',
    summary: 'A beginner-friendly guide to understanding data privacy in AI systems and practical steps for protecting personal information.',
    keyTakeaways: [
      'AI systems require vast amounts of data, often including personal information',
      'Understanding data collection practices helps protect privacy',
      'Users have rights regarding their personal data in many jurisdictions',
      'Privacy-preserving AI techniques are being developed',
      'Individual actions can help protect personal data privacy'
    ],
    category: 'AI Ethics',
    level: 'Beginner',
    type: 'article',
    readTime: '6 min read',
    author: 'Privacy Rights Foundation',
    verified: true,
    icon: '🔒',
    tags: ['Privacy', 'Data Protection', 'Personal Rights', 'AI Systems'],
    content: 'As AI systems become more prevalent in our daily lives, understanding how they use our personal data becomes increasingly important for protecting our privacy and autonomy.\n\n**How AI Uses Personal Data:**\n\nAI systems often require large datasets to function effectively. This data can include:\n- Browsing and search history\n- Social media activity\n- Purchase behavior\n- Location data\n- Biometric information\n- Communication patterns\n\n**Privacy Risks:**\n\n- Unauthorized profiling and categorization\n- Discriminatory treatment based on inferred characteristics\n- Data breaches exposing sensitive information\n- Loss of anonymity and autonomy\n\n**Protecting Your Privacy:**\n\n1. **Understand Data Collection**: Read privacy policies and understand what data is being collected\n2. **Use Privacy Controls**: Adjust settings on devices and platforms to limit data sharing\n3. **Be Selective**: Choose services that prioritize privacy and data protection\n4. **Stay Informed**: Keep up with your privacy rights under applicable laws\n5. **Use Privacy Tools**: Consider privacy-focused browsers, VPNs, and encrypted communications\n\n**Your Rights:**\n\nMany jurisdictions provide individuals with rights regarding their personal data, including:\n- Right to access your data\n- Right to correction of inaccurate data\n- Right to deletion in certain circumstances\n- Right to data portability\n- Right to object to certain processing\n\nUnderstanding and exercising these rights is an important part of maintaining privacy in the AI age.'
  },
  {
    id: '6',
    title: 'Algorithm Bias: Recognition and Mitigation',
    description: 'Learn to identify algorithmic bias and understand approaches to create fairer AI systems.',
    summary: 'This guide explains different types of algorithmic bias, how to recognize them, and strategies for building more equitable AI systems.',
    keyTakeaways: [
      'Algorithmic bias can occur at multiple stages of AI development',
      'Historical data often contains embedded societal biases',
      'Different types of bias require different mitigation strategies',
      'Diverse teams and perspectives are crucial for identifying bias',
      'Ongoing monitoring and adjustment are necessary for fair AI systems'
    ],
    category: 'AI Ethics',
    level: 'Intermediate',
    type: 'article',
    readTime: '9 min read',
    author: 'Algorithmic Justice League',
    verified: true,
    icon: '⚖️',
    tags: ['Algorithm Bias', 'Fairness', 'AI Ethics', 'Mitigation'],
    source: 'MIT AI Ethics Lab',
    content: 'Algorithmic bias represents one of the most pressing challenges in modern AI development. Understanding how bias emerges and spreads through AI systems is crucial for building technology that serves all people fairly.\n\n**Types of Algorithmic Bias:**\n\n1. **Historical Bias**: When training data reflects past discrimination or inequalities\n2. **Representation Bias**: When certain groups are under-represented in training data\n3. **Measurement Bias**: When data collection methods systematically differ across groups\n4. **Evaluation Bias**: When performance metrics don\'t account for different group needs\n5. **Deployment Bias**: When AI systems are used in contexts different from training\n\n**Recognition Strategies:**\n\n- Analyze training data for demographic representation\n- Test system performance across different user groups\n- Monitor real-world outcomes and feedback\n- Conduct regular bias audits with diverse teams\n- Examine the full AI pipeline from data to deployment\n\n**Mitigation Approaches:**\n\n- Improve data collection and representation\n- Use bias-aware machine learning techniques\n- Implement fairness constraints in model training\n- Establish diverse review and oversight processes\n- Create feedback loops for continuous improvement\n\nBuilding fair AI systems requires ongoing commitment, diverse perspectives, and systematic approaches to identifying and addressing bias at every stage of development.'
  }
];

export const searchSuggestions = [
  'AI Ethics',
  'Deepfakes',
  'Algorithm Bias',
  'Data Privacy',
  'AI Governance',
  'Machine Learning',
  'Facial Recognition',
  'AI and Society',
  'Digital Rights',
  'AI Transparency',
  'Automated Decision Making',
  'AI Accountability',
  'Tech Policy',
  'AI Detection Tools',
  'Privacy Rights'
];