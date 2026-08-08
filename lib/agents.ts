export interface AgentWorkflowStep {
  label: string;
  detail: string;
}

export interface AgentPainPoint {
  title: string;
  problem: string;
  resolution: string;
}

export interface Agent {
  slug: string;
  name: string;
  role: string;
  /** Tailwind color token this agent is identified by, sitewide */
  colorToken: 'agentGreen' | 'agentOrange' | 'blue' | 'agentRed' | 'cyan' | 'purple' | 'pink' | 'slate';
  colorHex: string;
  emoji: string;
  /** Short line used on cards / nav — matches existing homepage tone */
  tagline: string;
  /** Real, unlimited-count capability tags shown on cards in place of a single value line */
  tags: string[];
  /** 1–2 sentence summary for index/roster cards */
  summary: string;
  /** The vivid, specific moment that makes the role concrete — not a generic feature list */
  scenario: {
    setup: string;
    resolution: string;
  };
  /** Lucide icon name for the workflow step, resolved at render time */
  workflow: (AgentWorkflowStep & { icon: string })[];
  painPoints: AgentPainPoint[];
  /** How this role's scope shifts across verticals — supports the "no single script per industry" story */
  adaptedAcrossIndustries: { context: string; note: string }[];
  coordinatesWith: { slug: string; note: string }[];
}

export const agents: Agent[] = [
  {
    slug: 'amy',
    name: 'Amy',
    role: 'Receptionist',
    colorToken: 'agentGreen',
    colorHex: '#3B7E1D',
    emoji: '🎧',
    tagline: 'Never Miss A Call. Capture Every Opportunity.',
    summary: 'AI call handling, live answer, intent detection, intelligent routing, and rescheduling or cancellations — the first voice a caller hears, every time.',
    tags: ['Call Handling', 'Live Answer', 'Intent Detection', 'Intelligent Routing', 'Rescheduling', 'Cancellations'],
    scenario: {
      setup: "It's 6:45pm. Your front desk left at six. A new patient calls about a toothache that's been bothering them since lunch.",
      resolution: 'Amy answers on the second ring, understands why they\'re calling, checks real availability, and books tomorrow\'s first opening — before they\'ve even considered calling the practice down the street.',
    },
    workflow: [
      { icon: 'PhoneIncoming', label: 'Call Received', detail: 'Amy answers immediately — no hold music, no voicemail, day or night.' },
      { icon: 'MessageCircleQuestion', label: 'Intent Detected', detail: 'Determines why the caller is reaching out: new patient, existing patient, emergency, billing question, or something that needs a human.' },
      { icon: 'ClipboardList', label: 'Information Verified', detail: 'Confirms or collects the details needed to act — name, reason for the visit, insurance if relevant.' },
      { icon: 'CalendarClock', label: 'Availability Matched', detail: 'Checks real, live schedule availability against the request — not a static calendar someone forgot to update.' },
      { icon: 'CircleCheck', label: 'Booking Confirmed', detail: 'Confirms the appointment on the call and writes it directly into the PMS, EHR, or POS.' },
      { icon: 'Users2', label: 'Escalation When Needed', detail: 'Recognizes what genuinely needs a human — a true emergency, an angry caller — and hands it off immediately rather than trying to script through it.' },
    ],
    painPoints: [
      {
        title: 'Calls that ring out after hours',
        problem: 'The majority of new-patient calls that go unanswered never call back — they call the next result on Google instead.',
        resolution: 'Amy is on every call, every hour the phone can physically ring, so "after hours" stops being a category of lost business.',
      },
      {
        title: 'One receptionist, three calls at once',
        problem: 'A single front-desk staffer physically cannot answer more than one call at a time — the second and third callers get hold music or voicemail.',
        resolution: 'Amy handles concurrent calls natively, so call volume spikes stop translating directly into lost bookings.',
      },
      {
        title: 'Inconsistent call quality',
        problem: 'Different staff members handle calls differently depending on who picks up, their mood, and how busy the room is.',
        resolution: 'Every caller gets the same attentive, accurate handling regardless of what else is happening at the front desk that day.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'Dental & Medical', note: 'Handles new-patient intake questions, insurance basics, and appointment types specific to clinical scheduling.' },
      { context: 'Automotive Service', note: 'Books service appointments, quotes rough wait times, and triages "is this urgent" the way a service advisor would.' },
      { context: 'Hospitality & Dining', note: 'Confirms real-time table or room availability instead of a generic "let me check."' },
    ],
    coordinatesWith: [
      { slug: 'leena', note: 'Hands off scheduling conflicts and optimization decisions once the booking intent is confirmed.' },
      { slug: 'morgan', note: 'Passes new-patient calls into intake so forms and history are collected before the visit.' },
      { slug: 'trisha', note: 'Escalates anything that needs a human, with full context already gathered.' },
    ],
  },
  {
    slug: 'leena',
    name: 'Leena',
    role: 'Schedule Optimizer',
    colorToken: 'agentOrange',
    colorHex: '#F28C28',
    emoji: '📅',
    tagline: 'Maximize Schedule Utilization And Reduce No-Shows.',
    summary: 'Smart scheduling, conflict resolution, open-chair optimization, and provider matching — keeping the schedule full without anyone babysitting it.',
    tags: ['Scheduling', 'Conflict Resolution', 'Open-Chair Optimization', 'Provider Matching'],
    scenario: {
      setup: 'A patient cancels their 2pm at 11am. Without someone actively working the waitlist right now, that slot sits empty for the rest of the day.',
      resolution: 'Leena identifies the cancellation the moment it happens, matches it against the waitlist by urgency and fit, and has the slot rebooked before lunch.',
    },
    workflow: [
      { icon: 'CalendarClock', label: 'Change Detected', detail: 'Picks up cancellations, reschedules, and no-shows the moment they happen in the schedule.' },
      { icon: 'ListChecks', label: 'Waitlist Matched', detail: 'Cross-references the open slot against who\'s waiting, how urgent their need is, and provider/resource fit.' },
      { icon: 'MessageCircleQuestion', label: 'Outreach Sent', detail: 'Contacts the best-fit candidates in priority order, not a mass blast that creates a scramble.' },
      { icon: 'CircleCheck', label: 'Confirmation Captured', detail: 'Locks in whoever responds first and closes the loop with everyone else contacted.' },
      { icon: 'ClipboardList', label: 'Schedule Rebalanced', detail: 'Updates the live schedule and flags any remaining gaps for the next pass.' },
    ],
    painPoints: [
      {
        title: 'Empty slots from late cancellations',
        problem: 'A same-day cancellation usually just sits empty — by the time anyone notices, it\'s too late to fill.',
        resolution: 'Leena reacts in real time, working the waitlist within minutes instead of whenever staff next have a spare moment.',
      },
      {
        title: 'Manual waitlist calling eats staff time',
        problem: 'Working a waitlist by phone, one call at a time, is exactly the kind of task that gets skipped on a busy day — which is precisely when it matters most.',
        resolution: 'Outreach happens automatically and in parallel, without pulling anyone off the floor.',
      },
      {
        title: 'Double-booking and scheduling conflicts',
        problem: 'Manual scheduling across multiple providers or resources creates conflicts that aren\'t caught until someone shows up.',
        resolution: 'Every booking is checked against real-time availability before it\'s confirmed, not after.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'Dental & Medical', note: 'Optimizes provider-chair or provider-room matching, not just open time slots.' },
      { context: 'Automotive Service', note: 'Balances bay availability and technician specialty against incoming service requests.' },
      { context: 'Hospitality & Dining', note: 'Rebalances table turns and reservation windows as party sizes and timing shift.' },
    ],
    coordinatesWith: [
      { slug: 'amy', note: 'Receives booking requests directly from live calls for real-time matching.' },
      { slug: 'stephanie', note: 'Shares the same outreach infrastructure used for recall and follow-up campaigns.' },
      { slug: 'trisha', note: 'Reports utilization and gap patterns up for practice-wide visibility.' },
    ],
  },
  {
    slug: 'kim',
    name: 'Kim',
    role: 'Case Acceptance',
    colorToken: 'blue',
    colorHex: '#6366F1',
    emoji: '💼',
    tagline: 'Increase Acceptance Rates And Protect Revenue.',
    summary: 'Evaluates cases, verifies benefits, checks eligibility, and recommends next actions — the follow-through that turns a treatment plan into a booked, paid visit.',
    tags: ['Case Evaluation', 'Benefits Verification', 'Eligibility Checks', 'Next-Action Recommendations'],
    scenario: {
      setup: 'A patient leaves a consult with a treatment plan and a "we\'ll call you to schedule" — and then nobody does, because the front desk moved on to the next patient in the chair.',
      resolution: "Kim follows up within a day, answers the cost question that was actually holding them back, and gets the case back on the schedule instead of quietly written off.",
    },
    workflow: [
      { icon: 'ClipboardList', label: 'Unscheduled Case Flagged', detail: 'Identifies treatment plans or care recommendations that were presented but never booked.' },
      { icon: 'HandCoins', label: 'Benefits Verified', detail: 'Checks eligibility and benefits ahead of the outreach, so the conversation can answer cost questions immediately instead of "let us check and call you back."' },
      { icon: 'MessageCircleQuestion', label: 'Follow-Up Call', detail: 'Reaches out before the patient moves on with their week and the plan goes cold.' },
      { icon: 'HandCoins', label: 'Objections Addressed', detail: 'Handles the real reasons cases stall — cost, timing, uncertainty — with accurate, specific answers.' },
      { icon: 'CircleCheck', label: 'Case Rebooked or Logged', detail: 'Books the visit, or logs the specific reason it didn\'t convert so the pattern is visible instead of invisible.' },
    ],
    painPoints: [
      {
        title: 'Treatment plans that go cold',
        problem: 'Recommended care that isn\'t scheduled within days of the consult very often never gets scheduled at all.',
        resolution: 'Kim closes that gap immediately instead of leaving it to whenever staff have time to work a follow-up list.',
      },
      {
        title: 'Nobody has time to follow up on every case',
        problem: 'Front-desk staff are handling the patients physically in front of them — unscheduled treatment plans from last week aren\'t top of mind.',
        resolution: 'Every unscheduled case gets followed up on, not just the ones someone happens to remember.',
      },
      {
        title: 'Revenue left on the table',
        problem: 'Unscheduled treatment plans represent real, already-diagnosed revenue that simply isn\'t being collected.',
        resolution: 'Consistent, prompt follow-up recovers cases that would otherwise be quietly lost.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'Dental', note: 'Follows up on unscheduled treatment plans and answers benefit/cost questions directly.' },
      { context: 'Medical', note: 'Extends into prior authorization and insurance eligibility follow-through for recommended care.' },
    ],
    coordinatesWith: [
      { slug: 'morgan', note: 'Uses insurance and eligibility data already collected during intake.' },
      { slug: 'stephanie', note: 'Distinct from recall — Kim owns unscheduled treatment, Stephanie owns lapsed recurring visits.' },
      { slug: 'trisha', note: 'Surfaces case-acceptance trends for practice-wide visibility.' },
    ],
  },
  {
    slug: 'morgan',
    name: 'Morgan',
    role: 'Patient Intake',
    colorToken: 'agentRed',
    colorHex: '#CA4234',
    emoji: '📋',
    tagline: 'Faster Intake. Better Data. Happier Patients.',
    summary: 'Automated intake, digital forms, insurance verification, and data capture — done before the visit, not in the waiting room.',
    tags: ['Automated Intake', 'Digital Forms', 'Insurance Verification', 'Data Capture'],
    scenario: {
      setup: 'A patient arrives for their first visit and spends ten minutes filling out a clipboard of paperwork in the waiting room — pushing the whole day\'s schedule back before it even starts.',
      resolution: 'Morgan already sent the intake packet after booking, collected history, allergies, and insurance digitally, and synced it to the PMS or EHR — so the patient walks straight back.',
    },
    workflow: [
      { icon: 'CalendarClock', label: 'Appointment Confirmed', detail: 'Triggers the intake sequence as soon as a visit is booked, not the day of.' },
      { icon: 'ClipboardList', label: 'Digital Forms Sent', detail: 'Delivers the right intake forms for that visit type, not a generic one-size-fits-all packet.' },
      { icon: 'HeartHandshake', label: 'History & Consent Collected', detail: 'Captures health history, allergies, and consent digitally, in the patient\'s own time.' },
      { icon: 'HandCoins', label: 'Insurance Verified', detail: 'Confirms coverage details ahead of the visit instead of at check-in.' },
      { icon: 'CircleCheck', label: 'Synced Before the Visit', detail: 'Pushes verified, structured data into the PMS or EHR so staff see it, not a stack of paper to re-key.' },
    ],
    painPoints: [
      {
        title: 'Paperwork happening in the waiting room',
        problem: 'Collecting intake information on arrival delays the visit and puts the patient\'s first experience behind schedule before it starts.',
        resolution: 'Intake is finished before they walk in, so the appointment starts on time.',
      },
      {
        title: 'Illegible handwriting and re-keyed data',
        problem: 'Paper forms mean someone on staff has to manually transcribe handwriting into the system — a slow, error-prone step.',
        resolution: 'Data comes in structured and digital, with nothing to retype.',
      },
      {
        title: 'Missing history at the point of care',
        problem: 'When intake is rushed or incomplete, critical details like allergies or current medications can be missed at the exact moment they matter most.',
        resolution: 'Complete history is collected and available before the provider walks in the room.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'Dental & Medical', note: 'Collects clinical history, insurance, and consent ahead of the visit.' },
      { context: 'Automotive Service', note: 'Captures vehicle details and service history so the write-up is ready before the car arrives.' },
    ],
    coordinatesWith: [
      { slug: 'amy', note: 'Triggered directly by bookings Amy confirms on the call.' },
      { slug: 'kim', note: 'Insurance details collected here feed directly into benefit verification.' },
    ],
  },
  {
    slug: 'stephanie',
    name: 'Stephanie',
    role: 'Follow-up',
    colorToken: 'cyan',
    colorHex: '#00A8C8',
    emoji: '🔄',
    tagline: 'Stronger Retention. More Recalls. Better Long-Term Outcomes.',
    summary: 'Automated follow-ups, recall reminders, care plans, and re-engagement campaigns — the patients who\'d otherwise quietly fall off the schedule.',
    tags: ['Follow-ups', 'Recall Reminders', 'Care Plans', 'Re-engagement'],
    scenario: {
      setup: "A patient's due for their six-month recall. Nobody calls, because the recall list has three hundred names on it and staff are working the phones that ring, not the ones that should.",
      resolution: 'Stephanie works the entire recall list continuously, reaching out at the right interval for each patient and getting them rebooked before they\'ve gone long enough to become a lost patient entirely.',
    },
    workflow: [
      { icon: 'ClipboardList', label: 'Recall List Reviewed', detail: 'Identifies patients overdue — or coming due — for their next visit, hygiene recall, or follow-up.' },
      { icon: 'ListChecks', label: 'Patients Segmented', detail: 'Prioritizes outreach by how overdue someone is and their visit history, not a flat alphabetical list.' },
      { icon: 'MessageCircleQuestion', label: 'Outreach Sent', detail: 'Reaches out by call or text at the right cadence, without staff having to remember to.' },
      { icon: 'CircleCheck', label: 'Response Captured', detail: 'Books the visit directly, or notes the reason and requeues for a later, better-timed follow-up.' },
    ],
    painPoints: [
      {
        title: 'Patients who fall through the cracks',
        problem: 'Once someone goes far enough past their recall date without a proactive nudge, they often just... stop coming back.',
        resolution: 'Stephanie closes that gap before it becomes permanent, reaching out at the moment it still matters.',
      },
      {
        title: 'Recall lists too large to work manually',
        problem: 'A list of hundreds of overdue patients is not realistically callable by staff who also have a full day of in-person patients.',
        resolution: 'The entire list gets worked continuously, not just whenever there\'s a slow afternoon.',
      },
      {
        title: 'Inconsistent follow-up cadence',
        problem: 'Without a system doing it automatically, follow-up timing depends on whoever remembers to do it and when.',
        resolution: 'Every patient gets contacted on a consistent, appropriate schedule — not a matter of staff memory.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'Dental', note: 'Runs hygiene recall specifically — the highest-volume recurring-revenue outreach in most practices.' },
      { context: 'Medical', note: 'Generalizes to follow-up care, chronic-condition check-ins, and post-visit outreach.' },
    ],
    coordinatesWith: [
      { slug: 'leena', note: 'Shares outreach and scheduling infrastructure to book responses directly.' },
      { slug: 'elise', note: 'Distinct focus — Stephanie brings patients back in, Elise manages the experience once they\'re here.' },
    ],
  },
  {
    slug: 'trisha',
    name: 'Trisha',
    role: 'Practice Manager',
    colorToken: 'purple',
    colorHex: '#A855F7',
    emoji: '⚙️',
    tagline: 'Streamlined Operations. Better Visibility. Less Admin Burden.',
    summary: 'Workflow orchestration, team oversight, task management, and operational efficiency — the coordinator who knows what every other employee is doing, in real time.',
    tags: ['Workflow Orchestration', 'Team Oversight', 'Task Management', 'Operational Efficiency'],
    scenario: {
      setup: 'A scheduling conflict and an unusually tense caller happen within the same ten minutes — exactly the kind of moment that gets missed when everyone\'s heads-down on their own task.',
      resolution: "Trisha sees both the moment they happen, recognizes the caller needs a human right now, and routes it — while the scheduling conflict gets resolved automatically in the background.",
    },
    workflow: [
      { icon: 'Network', label: 'Activity Monitored', detail: 'Maintains a real-time view across every other employee — what\'s stalled, what\'s working, what needs attention.' },
      { icon: 'MessageCircleQuestion', label: 'Situations Triaged', detail: 'Distinguishes routine activity from something that genuinely needs a human decision.' },
      { icon: 'Users2', label: 'Escalation Routed', detail: 'Hands off to the right staff member with full context already gathered — not a bare "someone call this patient back."' },
      { icon: 'CircleCheck', label: 'Resolution Tracked', detail: 'Follows escalations through to close instead of letting them disappear once handed off.' },
    ],
    painPoints: [
      {
        title: 'No single view of what\'s happening',
        problem: 'When scheduling, intake, follow-up, and calls are all handled separately, nobody has a full picture of where things actually stand.',
        resolution: 'Trisha maintains that view continuously, across every role, so nothing operates in a silo.',
      },
      {
        title: 'Things fall through the cracks between roles',
        problem: 'Handoffs between tasks — a call that needed follow-up, a case that needed rescheduling — are exactly where work gets lost.',
        resolution: 'Trisha owns the handoffs themselves, not just the individual tasks on either side.',
      },
      {
        title: 'Escalations caught too late',
        problem: 'Without active monitoring, a situation that needed a human often surfaces only after a patient has already complained.',
        resolution: 'Recognizes what needs escalation in real time, before it becomes a complaint.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'All verticals', note: 'This role is structurally the same everywhere it deploys — coordination, not a specific clinical or transactional task.' },
    ],
    coordinatesWith: [
      { slug: 'amy', note: 'Receives escalations directly from calls that need a human.' },
      { slug: 'elise', note: 'Surfaces satisfaction and sentiment signals into the same operational view.' },
    ],
  },
  {
    slug: 'elise',
    name: 'Elise',
    role: 'Patient Experience',
    colorToken: 'pink',
    colorHex: '#EC4899',
    emoji: '⭐',
    tagline: 'Stronger Reputation. Better Experience. More Referrals.',
    summary: 'Monitors reviews, automates responses, tracks sentiment, and improves satisfaction — closing the loop after the visit, not just during it.',
    tags: ['Review Monitoring', 'Automated Responses', 'Sentiment Tracking', 'Satisfaction Improvement'],
    scenario: {
      setup: 'A patient has a genuinely great visit and nobody asks for a review — meanwhile, a single frustrated review from months ago is still sitting unanswered, publicly, for every prospective patient to see.',
      resolution: "Elise catches both: prompting the happy patient at the right moment, and drafting a thoughtful, timely response to the older review the same week it's flagged.",
    },
    workflow: [
      { icon: 'CircleCheck', label: 'Visit Completion Detected', detail: 'Identifies when a visit has wrapped up and it\'s the right moment to reach out.' },
      { icon: 'MessageCircleQuestion', label: 'Sentiment Gathered', detail: 'Reads the signal — a genuinely positive visit versus one that needs a closer look — before deciding what to do next.' },
      { icon: 'Star', label: 'Review Requested or Flagged', detail: 'Prompts satisfied patients to leave a review at the moment they\'re most likely to, or flags a concerning pattern for staff attention.' },
      { icon: 'MessageCircleQuestion', label: 'Response Drafted', detail: 'Prepares a thoughtful, specific response to reviews — never a generic copy-paste line.' },
      { icon: 'ClipboardList', label: 'Trends Reported', detail: 'Surfaces patterns across visits so recurring issues get fixed, not just individually smoothed over.' },
    ],
    painPoints: [
      {
        title: 'Reviews only arrive when someone\'s upset',
        problem: 'Happy patients rarely leave reviews on their own initiative — frustrated ones almost always do, skewing the public picture.',
        resolution: 'Elise actively prompts satisfied patients at the right moment, balancing the record with the experiences that don\'t naturally get voiced.',
      },
      {
        title: 'No staff bandwidth to manage reputation',
        problem: 'Asking for reviews and responding to them consistently is exactly the kind of task that gets skipped when the day gets busy.',
        resolution: 'It happens continuously in the background, without needing to be someone\'s dedicated job.',
      },
      {
        title: 'Negative reviews sitting unanswered',
        problem: 'An unanswered negative review, visible to every future patient researching the practice, reads as indifference even when it isn\'t.',
        resolution: 'Gets a timely, specific response instead of sitting untouched for weeks or months.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'Dental & Medical', note: 'Framed around patient experience and clinical trust signals.' },
      { context: 'Hospitality & Dining', note: 'Directly maps to guest experience and public review management — arguably even higher-stakes in this vertical.' },
    ],
    coordinatesWith: [
      { slug: 'trisha', note: 'Feeds satisfaction and sentiment trends into the same operational view.' },
      { slug: 'stephanie', note: 'A strong experience here feeds directly into stronger recall/follow-up response rates.' },
    ],
  },
  {
    slug: 'joseph',
    name: 'Joseph',
    role: 'Fax Management',
    colorToken: 'slate',
    colorHex: '#7F828E',
    emoji: '📠',
    tagline: 'Eliminate Manual Fax Work And Reduce Document Delays.',
    summary: 'Automated fax routing, document management, referrals, and lab order tracking — the paper trail nobody wants to own.',
    tags: ['Fax Routing', 'Document Management', 'Referrals', 'Lab Order Tracking'],
    scenario: {
      setup: 'A referral fax arrives overnight. By the time someone finds it in the machine and reads it the next afternoon, the patient has already called somewhere else.',
      resolution: 'Joseph reads it the moment it arrives, extracts the relevant information, and routes it into the right workflow — the referral gets contacted the same morning, not a day and a half later.',
    },
    workflow: [
      { icon: 'FileScan', label: 'Document Received', detail: 'Picks up incoming faxes — referrals, lab orders, records requests — as soon as they arrive, not on the next person\'s schedule.' },
      { icon: 'ClipboardList', label: 'Content Extracted', detail: 'Reads and classifies the document, pulling out the specific information that matters.' },
      { icon: 'Network', label: 'Routed Appropriately', detail: 'Sends referrals into booking, lab results into the right chart, records requests to the right process.' },
      { icon: 'CircleCheck', label: 'Confirmation Logged', detail: 'Tracks that the document was received and acted on, closing a loop that paper often leaves open.' },
    ],
    painPoints: [
      {
        title: 'Faxes sitting unread',
        problem: 'A physical or digital fax pile is easy to fall behind on, especially on busy days — and delays compound the longer something sits.',
        resolution: 'Every document is processed the moment it arrives, with nothing waiting for someone to get around to it.',
      },
      {
        title: 'Referrals lost or delayed',
        problem: 'A referral that isn\'t acted on quickly often results in the patient going elsewhere before anyone follows up.',
        resolution: 'Referrals are extracted and routed into scheduling immediately, closing the gap between arrival and action.',
      },
      {
        title: 'Manual re-entry from scanned documents',
        problem: 'Getting information out of a faxed document and into the system usually means someone typing it in by hand.',
        resolution: 'Structured data is extracted automatically and routed directly — no re-keying.',
      },
    ],
    adaptedAcrossIndustries: [
      { context: 'Dental & Medical', note: 'Handles referrals, lab orders, and records requests — still a very real volume of fax traffic in healthcare specifically.' },
    ],
    coordinatesWith: [
      { slug: 'amy', note: 'A processed referral often becomes a call Amy makes to book the visit.' },
      { slug: 'trisha', note: 'Escalates anything that looks urgent or unclear for human review.' },
    ],
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}
