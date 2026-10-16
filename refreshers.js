/* Vono Refresher content
   -----------------------------------------------------------------------
   This file holds the wording for every Refresher walkthrough. To change
   wording, find the refresher by its name and edit the text between the
   quotes, then upload this file to GitHub together with index.html.

   Step types:
     sC  consultation question      sK  checklist (items to tick)
     sT  technique step             sS  safety note
     sR  reference list             sM  timer (title, text, seconds, "real time" label)
     sF  final step (no photo needed)

   Lists: cuts, chemical, safety (barbering and cosmetology), massage and
   msafety (massage therapy), nail, braid, esth and mua (one list each).
   A refresher marked crafts:['Cosmetologist'] only shows for that craft.
   ----------------------------------------------------------------------- */
window.VONO_REFRESHERS = (function(){
// Small builders for the refresher step data below.
const sC=(title,body,label)=>({kind:'consult',badge:'kind-consult',label:label||'Consultation',title,body});
const sK=(title,items,label)=>({kind:'checklist',badge:'kind-prep',label:label||'Prep',title,items});
const sT=(title,body,label)=>({kind:'tech',badge:'kind-tech',label:label||'Technique',title,body});
const sS=(title,body,label)=>({kind:'safety',badge:'kind-safety',label:label||'Safety',title,body});
const sR=(label,items,title)=>({kind:'reference',badge:'kind-safety',label,title,items});
const sM=(title,body,seconds,real,label)=>({kind:'timer',badge:'kind-safety',label:label||'Safety check',title,body,seconds,real});
const sF=(title,body)=>({kind:'finish',badge:'kind-final',label:'Finish',title,body});
return {
  cuts: [
    { id:'skin-fade', name:'Skin Fade', category:'cuts', steps:[
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Confirm the cut', body:"Confirm guard lengths and fade zone with the client. Check for cowlicks at the crown and part direction before you start."},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Sanitize & set up', items:['Clean and sanitize clippers/blades','Fresh neck strip and cape','Comb and clips within reach']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Establish the guideline', body:'Set your zero-gap line at the temple and nape with clippers-over-comb, low to the skin.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Blend the fade', body:'Work upward in overlapping passes, opening the guard size incrementally as you move up the head.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Cross-check both sides', body:'Compare left and right in the mirror at eye level before moving to the top.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Detail the perimeter', body:'Clean the hairline, temples, and nape with a straight razor or trimmer.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Style & finish', body:'Comb through, apply finishing product, and do a final mirror check with the client.'}
    ]},
    { id:'womens-layers', name:"Women's Layered Cut", category:'cuts', steps:[
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Confirm the shape', body:'Confirm desired length, layer placement, and part. Check natural fall, growth pattern, and texture.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Sanitize & section', items:['Clean and sanitize shears/clippers','Section hair into quadrants with clips','Cape and towel the client']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Cut the guideline', body:'Establish your base length at the perimeter, cutting on damp, evenly distributed hair.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Build the layers', body:'Elevate each section to your guide angle and cut layer by layer, working from the back forward.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Blend & connect', body:'Cross-check horizontal and vertical sections so layers connect evenly, with no visible steps.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Point-cut & texturize', body:'Soften the perimeter and remove bulk with point cutting where needed.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Style & finish', body:'Blow-dry or style as requested. Final mirror check with the client from all angles.'}
    ]},
    { id:'beard-trim', name:'Beard Trim & Line-up', category:'cuts', steps:[
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Confirm the shape', body:'Confirm desired length and shape: full beard, line-up only, or a fade into the beard.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Sanitize & prep', items:['Clean and sanitize clippers/trimmer','Comb through the beard','Cape the client']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Set the length', body:'Trim to guard length, working with the grain first, then against it for evenness.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Define the lines', body:'Outline the cheek line, neckline, and mustache with a trimmer for crisp, straight edges.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Detail & finish', body:'Clean up stray hairs with a razor. Apply beard oil or balm to finish.'}
    ]}
  ],
  chemical: [
    { id:'relaxer', name:'Relaxer: Virgin Application', category:'chemical', steps:[
      {kind:'consult', badge:'kind-safety', label:'Safety check', title:'Check scalp & history', body:'Confirm scalp condition and prior chemical history. Do not proceed if the scalp is irritated, cut, or abraded.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Protect & section', items:['Apply base/protective cream to scalp and hairline','Section hair into four quadrants','Gloves on']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Apply, resistant areas first', body:'Apply from the most resistant area (nape) to the least resistant, avoiding the scalp on the first pass.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:"Smooth, don't re-comb", body:"Smooth with the back of the comb only. Do not re-comb through sections you've already processed."},
      {kind:'timer', badge:'kind-safety', label:'Safety check', title:'Monitor processing time', body:'Check elasticity every few minutes. Do not exceed the maximum processing time for this hair type.', seconds:90, real:'~15 min'},
      {kind:'timer', badge:'kind-safety', label:'Safety check', title:'Rinse & neutralize', body:'Rinse thoroughly with warm water, then apply neutralizing shampoo for its full contact time.', seconds:45, real:'~5 min'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Condition & assess', body:'Deep condition. Check for scalp irritation before continuing to style.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Style & aftercare', body:"Style as requested. Advise the client on relaxer aftercare and timing before their next chemical service."}
    ]},
    { id:'color', name:'Single-Process Color', category:'chemical', steps:[
      {kind:'consult', badge:'kind-safety', label:'Safety check', title:'Confirm formula & test', body:'Confirm formula and level with the client. A patch test 48 hours prior and a strand test before full application are both required.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Protect & section', items:['Apply barrier cream at the hairline','Section into four quadrants','Gloves on']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Mix the formula', body:"Mix color and developer to the manufacturer's ratio immediately before application. Never mix ahead of time."},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Apply', body:'On virgin hair, apply mid-shaft to ends first, keeping a quarter-inch from the scalp. On a retouch, apply to new growth first.'},
      {kind:'timer', badge:'kind-timer', label:'Processing', title:'Process the color', body:"Process per the formula's timing. Check development partway through with a strand test.", seconds:80, real:'~30 min'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Rinse & condition', body:'Rinse until the water runs clear, shampoo once, then condition.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Style & aftercare', body:'Style as requested. Advise the client on color-safe products and fade-resistant care.'}
    ]},
    { id:'perm', name:'Perm: Rod Wrap', category:'chemical', steps:[
      {kind:'consult', badge:'kind-safety', label:'Safety check', title:'Test curl & elasticity', body:'Confirm the curl size and pattern desired. Test elasticity and porosity. Do not perm over-processed or damaged hair.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Protect & section', items:['Apply protective cream at the hairline','Section into wrapping panels','Gloves on']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Wrap the rods', body:'Wrap each subsection smoothly and evenly onto the rod, from ends to scalp, with even tension throughout.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Apply the perm solution', body:'Saturate each rod thoroughly and evenly, avoiding oversaturation at the scalp.'},
      {kind:'timer', badge:'kind-safety', label:'Safety check', title:'Process & test curl', body:"Process per the solution's timing. Perform a test curl partway through to check development.", seconds:75, real:'~15 min'},
      {kind:'timer', badge:'kind-safety', label:'Safety check', title:'Rinse & neutralize', body:'Rinse thoroughly and blot the rods dry, then apply neutralizer for its full contact time.', seconds:50, real:'~10 min'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Remove rods & rinse', body:'Carefully remove the rods without disturbing the curl pattern, then rinse.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Style & aftercare', body:'Style with fingers, not a brush, while damp. Advise on perm aftercare and timing before the next chemical service.'}
    ]},
    { id:'bleach', name:'Full-Head Lightening (Bleach)', category:'chemical', steps:[
      {kind:'consult', badge:'kind-safety', label:'Safety check', title:'Check history & test', body:'Confirm the target level and check for prior chemical services. Lightening over color-treated hair carries extra risk of breakage.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Protect & section', items:['Apply barrier cream at the hairline','Section into four quadrants','Gloves on']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Mix the lightener', body:"Mix bleach and developer to the manufacturer's ratio immediately before application."},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Apply, resistant areas first', body:'Apply to the most resistant area first (typically the back and roots), working quickly and evenly.'},
      {kind:'timer', badge:'kind-safety', label:'Safety check', title:'Monitor lift closely', body:'Check lift every 5 to 10 minutes with a strand test. Never leave lightener processing unchecked.', seconds:70, real:'~10 min, checked often'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Rinse & treat', body:'Rinse thoroughly with cool-to-lukewarm water, then follow with a bond-rebuilding or protein treatment.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Tone if needed', body:"Apply toner if the client's lift needs neutralizing, per the desired end result."},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Condition & finish', body:'Deep condition. Style as requested and advise on strengthening aftercare.'}
    ]}
  ],
  massage: [
    { id:'swedish-full', name:'Swedish Full-Body (60 min)', category:'massage', steps:[
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Check in before you start', body:"Confirm the client's goals, areas to avoid, and any new injuries or health changes since the last visit. Agree on a pressure scale of 1 to 10 and ask them to speak up if anything is too much or too little."},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Set up the room', items:['Hands washed and nails short','Fresh linens on a clean table','Oil or lotion warmed and in a pump bottle','Room temperature, lighting and music set','Client given privacy to undress and get on the table']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Begin face-down with a calm first touch', body:'Re-enter after knocking, check the drape, and make first contact with a slow, still hold on the back. Matching your breathing to theirs helps them settle.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Effleurage: warm the back', body:'Uncover the back only. Use long, gliding strokes with the flat of your hands, moving up toward the heart and returning lightly. Spread the oil and warm the tissue with light to medium pressure.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Petrissage: knead the back and shoulders', body:'Lift, roll and knead the muscle on both sides of the spine, across the upper shoulders and the sides of the torso. Never press directly on the spine itself.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Friction, then feather out', body:'Use small circular friction around the shoulder blades and along the muscles beside the spine. Finish the area with light, slow feather strokes before moving on.'},
      {kind:'timer', badge:'kind-timer', label:'Pacing', title:'Pace the back', body:'Plan about 15 minutes for the back. Keep an eye on the clock without rushing the client.', seconds:60, real:'~15 min'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Legs, one at a time', body:'Uncover one leg, effleurage from ankle to hip, then knead the calf and thigh. Use light pressure behind the knee and re-drape the leg before you move to the other.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Turn the client over', body:'Hold the drape up like a screen so the client can turn over privately. Re-drape and check the face cradle, bolsters and their comfort.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Face-up: arms, legs, then neck', body:'Work one arm at a time with effleurage and gentle kneading, repeat the legs from the front, then cradle the head and ease the neck and upper shoulders.'},
      {kind:'timer', badge:'kind-timer', label:'Pacing', title:'Pace the front', body:'Plan about 20 minutes for the front of the body, including the neck, so the session ends on time.', seconds:60, real:'~20 min'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Close slowly and give aftercare', body:'Finish with slower, lighter strokes and a still hold. Let the client know you are stepping out, give them time to get up slowly, offer water, and suggest drinking extra water and stretching gently later today.'}
    ]},
    { id:'back-neck', name:'Back & Neck (30 min)', category:'massage', steps:[
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Where is the tension?', body:"Ask where they feel tightness, whether it is new or ongoing, and whether there is any numbness, tingling or pain that travels down an arm or leg. If there is, adapt your work or refer them out. Agree on a 1 to 10 pressure scale."},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Set up quickly', items:['Hands washed','Fresh linens, face cradle wiped down','Oil or lotion ready','Client face-down and draped to the hips']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Warm up the back', body:'Uncover the back and use long effleurage strokes from the low back up toward the shoulders, then glide lightly back down. Three to five passes.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Work beside the spine', body:'Use your palms, then your thumbs or fingertips, in slow strokes along the muscles on each side of the spine. Stay beside the spine and never press directly on it.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Shoulders and shoulder blades', body:'Knead the upper shoulders, then use circular friction around the edges of the shoulder blade. Support the arm if you need to move it.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Neck', body:'Use light to medium pressure on the muscles along the back and sides of the neck. Avoid pressing on the front of the throat, and keep the neck in a comfortable, neutral position.'},
      {kind:'timer', badge:'kind-timer', label:'Pacing', title:'Keep to the 30 minutes', body:'Spend roughly 20 minutes on the back and shoulders and 10 on the neck.', seconds:60, real:'~30 min'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Check in and give aftercare', body:'Finish with light strokes and a still hold. Ask how the neck and back feel, suggest water and gentle stretching, and mention that mild soreness for a day is normal after focused work.'}
    ]},
    { id:'deep-tissue', name:'Deep Tissue Basics', category:'massage', steps:[
      {kind:'consult', badge:'kind-safety', label:'Safety check', title:'Ask before going deeper', body:'Ask about blood thinners, recent injuries, bruising easily, and any conditions that call for lighter pressure. If any apply, adapt your pressure or get the client’s doctor to clear it first. Agree on a pressure scale of 1 to 10 and a signal to back off.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Prepare', items:['Hands washed and linens fresh','Oil or lotion with a little more grip','Body mechanics ready: table height and a wide stance','Plan to use your forearms and knuckles, not only your thumbs']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Warm up first', body:'Spend several minutes on lighter, broader strokes so the tissue is ready. Going deep on cold muscle makes clients tense up and fight the pressure.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Sink in slowly', body:'Increase pressure gradually and let the tissue soften before you move. Use slow strokes with your forearm, knuckles or elbow instead of stabbing with a finger or thumb.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Check in at depth', body:'Ask the client to rate the pressure. Discomfort that eases as you hold is fine. Sharp, burning, electric or radiating pain means back off right away.'},
      {kind:'safety', badge:'kind-safety', label:'Avoid', title:'Places not to press deeply', body:'Avoid deep pressure on the spine and bony areas, the front of the neck, behind the knee, the inner upper arm and thigh, and the area just below the ribs beside the spine (over the kidneys).'},
      {kind:'timer', badge:'kind-timer', label:'Pacing', title:'Limit time on one spot', body:'Work a tight area for a short time, then move on and come back if needed. Long, repeated deep pressure in one place can bruise or irritate.', seconds:45, real:'~2-3 min per area'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Aftercare', body:'Finish with lighter, broader strokes to calm the area. Tell the client some soreness for 24 to 48 hours can happen, and suggest water, gentle movement, and heat on sore spots. Sharp or worsening pain should be checked by a doctor.'}
    ]}
  ],
  msafety: [
    { id:'m-intake', name:'Intake & Health Screening', category:'msafety', steps:[
      {kind:'reference', badge:'kind-prep', label:'Have ready', title:'Before the client arrives', items:['A written intake form (new clients) or a quick update form (returning clients)','Pen and a clipboard or tablet','A private space to talk before the session starts']},
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Why are they here?', body:'Ask what they want from the session: relaxation, a sore spot, an injury, or athletic recovery. Their goal decides your pressure, your areas and your pace.'},
      {kind:'consult', badge:'kind-safety', label:'Health history', title:'Ask about health and medications', body:'Ask about medical conditions, surgeries, injuries, current medications (especially blood thinners), pregnancy, allergies to oils, nuts or fragrance, and anything they have been told to avoid. Record every answer on the form.'},
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Pressure and preferences', body:'Ask about pressure, temperature, music and talking preferences, and any areas to leave alone. Explain the 1 to 10 pressure scale.'},
      {kind:'checklist', badge:'kind-prep', label:'Consent', title:'Before you begin', items:['Client has read and signed the form','Allergies and areas to avoid are noted','Draping and privacy have been explained','Client knows they can stop or adjust at any time','Questions have been answered']},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Record and proceed', body:'Keep the signed form on file and follow your state’s record-keeping rules. If anything on the form is a concern, use the Contraindications refresher before you begin.'}
    ]},
    { id:'m-contraindications', name:'Contraindications: Proceed, Adapt, Refer', category:'msafety', steps:[
      {kind:'reference', badge:'kind-safety', label:'Three answers', title:'Every screening ends in one of these', items:['Proceed: nothing in the way','Adapt: change pressure, positioning or the area, or get the doctor’s clearance first','Postpone or refer: do not massage today, or send them to a doctor']},
      {kind:'safety', badge:'kind-safety', label:'Postpone', title:'Usually skip the massage today', body:'Fever, contagious illness, skin infections or rashes of unknown cause, and a recent injury that is still hot, swollen or bruised. Reschedule kindly and explain why.'},
      {kind:'safety', badge:'kind-safety', label:'Adapt', title:'Usually adapt', body:'Pregnancy, high blood pressure, recent surgery, cancer treatment, diabetes, blood thinners, easy bruising and varicose veins. Use lighter pressure, adjust positioning, or ask the client’s doctor for clearance. When unsure, get clearance in writing.'},
      {kind:'safety', badge:'kind-safety', label:'Local', title:'Avoid just the area', body:'Do not work directly over bruises, rashes, open skin, sunburn, varicose veins or any lump you did not expect. You can usually massage the rest of the body.'},
      {kind:'safety', badge:'kind-safety', label:'Red flag', title:'Swelling, warmth and pain in one calf', body:'This can be a blood clot. Do not massage the leg, and tell the client to get medical care right away. Chest pain, trouble breathing or a sudden severe headache need emergency help.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Document your decision', body:'Write down what you decided and why, and what you told the client. This is a general refresher, not medical advice. Your training and state law come first.'}
    ]},
    { id:'m-draping', name:'Draping', category:'msafety', steps:[
      {kind:'consult', badge:'kind-consult', label:'Consultation', title:'Explain draping first', body:'Tell the client that only the area being worked is uncovered, that they undress to their comfort level, and that you leave the room while they get on the table.'},
      {kind:'checklist', badge:'kind-prep', label:'Prep', title:'Set the table', items:['Clean top sheet and a blanket for warmth','Bolsters and face cradle ready','Sheet turned back for the client to slide under','Knock before you re-enter']},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Face-down drape', body:'The client lies face-down with the sheet covering the body. Fold the drape back to the area you are working and tuck it at the edge so it stays put.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Face-up drape', body:'Hold the sheet up like a screen while the client turns over. Cover the chest and hips, and uncover one limb at a time, tucking the sheet around it.'},
      {kind:'safety', badge:'kind-safety', label:'Boundaries', title:'What stays covered', body:'Never uncover the genitals. Keep the gluteal and breast areas covered unless your training, state law and the client’s clear consent allow otherwise. If the drape slips, fix it calmly.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Leave them covered and comfortable', body:'At the end, re-drape fully, tell the client you are stepping out, and give them time to get up and dress in private.'}
    ]},
    { id:'m-sanitation', name:'Sanitation & Room Setup', category:'msafety', steps:[
      {kind:'checklist', badge:'kind-prep', label:'Before each client', title:'Reset the room', items:['Wash hands with soap and water for at least 20 seconds','Fresh sheets and blanket for every client','Wipe table, face cradle and bolsters with a disinfectant approved for the surface','Oil or lotion in a pump bottle, never dipped into with hands','Used linens in a closed laundry bag, not on the floor']},
      {kind:'timer', badge:'kind-safety', label:'Safety check', title:'Respect the disinfectant contact time', body:'Surfaces must stay wet for the full contact time on the product label. Wiping dry early means it has not disinfected.', seconds:30, real:'Per product label'},
      {kind:'safety', badge:'kind-safety', label:'Safety', title:'Any tools that touch skin', body:'Clean and disinfect stones, cups and other tools between clients, following the manufacturer and your state board rules.'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Wash up again', body:'Wash your hands again after clearing the room and before greeting the next client.'}
    ]},
    { id:'m-body-mechanics', name:'Body Mechanics for You', category:'msafety', steps:[
      {kind:'tech', badge:'kind-tech', label:'Setup', title:'Table height', body:'Adjust the table so you can work with a straight back and relaxed shoulders. A common starting point is about the height of your knuckles when you stand with your arms at your sides, then adjust for each technique.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Wide, staggered stance', body:'Stand with one foot ahead of the other and your knees soft. Move from your legs and hips by shifting your weight, not by reaching with your arms.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Lean, do not push', body:'Let your body weight supply the pressure by leaning into the stroke. Keep your wrists straight and your elbows close.'},
      {kind:'tech', badge:'kind-tech', label:'Technique', title:'Protect your thumbs', body:'Use your palms, forearms, knuckles and fists for deeper work and save your thumbs for small, precise work.'},
      {kind:'timer', badge:'kind-timer', label:'Recovery', title:'Stretch between clients', body:'Shake out your hands, roll your shoulders and stretch your wrists and back. A short stretch between clients adds years to your career.', seconds:30, real:'~2 min'},
      {kind:'finish', badge:'kind-final', label:'Finish', title:'Make it a habit', body:'If something hurts while you work, change your position instead of pushing through. Tell the client you need a quick adjustment.'}
    ]}
  ],
  nail: [
    { id:'n-consult', name:'Consultation & Nail Check', category:'nail', steps:[
      sC('Ask about health and allergies', 'Ask about allergies to nail products, skin conditions, medications, diabetes or circulation problems, and pregnancy. Ask what service they want and what has gone wrong at past appointments.'),
      sT('Look at the hands or feet first', 'Check the nails, cuticles and surrounding skin before you start. Look for redness, swelling, pus, discoloration, thickened or crumbling nails, nails lifting from the nail bed, cuts and open skin.', 'Check'),
      sS('Decide: proceed, adapt or refer', 'Clear nails and skin: proceed. Minor issues like dryness or a small hangnail: adapt and go gently. Signs of infection or a possible fungal problem: do not service the area, and suggest they see a doctor.', 'Decision'),
      sT('Agree on the service', 'Explain what you will do, how long it will take and the price. Tell the client to speak up if anything stings or hurts.', 'Consultation'),
      sF('Record it', 'Write down allergies, any concerns you saw and what you agreed. Follow your state’s record-keeping rules.')
    ]},
    { id:'n-sanitation', name:'Sanitation & Implement Disinfection', category:'nail', steps:[
      sK('Before each client', ['Wash hands with soap and water','Wipe the table and arm rest with a disinfectant approved for the surface','Fresh towel or liner for every client','New files, buffers and orangewood sticks, or ones the client keeps','Clean, disinfected metal tools ready in a covered container'], 'Prep'),
      sS('Single-use items stay single-use', 'Files, buffers, sanding bands, toe separators and orangewood sticks cannot be disinfected. Throw them away or give them to the client after one use.'),
      sT('Metal tools: clean, then disinfect', 'Scrub off debris with soap and water first, rinse, dry, then fully submerge in an EPA-registered disinfectant. Disinfectant does not work on a dirty tool.', 'Technique'),
      sM('Respect the contact time', 'Tools must stay submerged for the full contact time on the product label. Taking them out early means they are not disinfected.', 30, 'Per product label'),
      sF('Wash up', 'Wash your hands after cleaning up and before you greet the next client. Replace disinfectant as often as the label says.')
    ]},
    { id:'n-notservice', name:'When Not to Service', category:'nail', steps:[
      sR('Three answers', ['Proceed: nothing in the way','Adapt: avoid the area or change the service','Do not service: send them to a doctor'], 'Every check ends in one of these'),
      sS('Do not service', 'Redness, swelling, heat, pus or pain around a nail, a nail that is thick, crumbling or discolored in a way you have not seen before, a nail separating from the nail bed, a rash or open sores, and warts on or near the service area.', 'Skip the service'),
      sS('Take extra care', 'Diabetes or poor circulation, pregnancy, and anyone on blood thinners. Avoid anything that could cut or break the skin, use light pressure, and check your state rules on foot tools.', 'Adapt'),
      sT('Say it kindly', 'Tell the client you want them to get it checked first, that you are not able to diagnose it, and that you would be glad to see them once it has cleared.', 'Client'),
      sF('Record it', 'Write down what you saw and what you told the client. This is a general refresher, not medical advice. Your training and state law come first.')
    ]},
    { id:'n-cut', name:'Nicks, Cuts & Bleeding', category:'nail', steps:[
      sS('Stop the service', 'Stop right away and tell the client calmly what happened.', 'Step 1'),
      sS('Wash and glove', 'Wash your hands and put on clean gloves before you touch the area.', 'Step 2'),
      sS('Stop the bleeding', 'Apply gentle pressure with a clean gauze or cotton pad. Then clean with an antiseptic and cover with a bandage.', 'Step 3'),
      sS('Handle what touched the blood', 'Throw away single-use items in a sealed bag. Metal tools must be cleaned and then disinfected with a disinfectant that is effective against blood and body fluids, following the label.', 'Step 4'),
      sS('Clean the area', 'Disinfect the table and anything else the blood touched before you take off your gloves.', 'Step 5'),
      sF('Wash up and follow up', 'Wash your hands. Tell the client to watch for redness, swelling or pus over the next few days and to see a doctor if they appear. Record what happened.')
    ]},
    { id:'n-ventilation', name:'Product Safety & Ventilation', category:'nail', steps:[
      sK('Set up the workspace', ['Ventilation or an extractor running and the room well aired','Dust control at the table for filing and drilling','Product containers closed when not in use','Gloves and a mask ready if you need them','Safety data sheets available for your products'], 'Prep'),
      sS('Protect skin and eyes', 'Keep liquids and powders off the client’s skin and your own. If product touches skin, wipe it off right away. Skin redness, itching or swelling can mean a developing allergy.'),
      sS('If something goes wrong', 'If a product gets in the eyes, rinse with plenty of clean water for at least 15 minutes and get medical care. For trouble breathing or swelling of the face, call emergency services.', 'Reaction'),
      sT('Dispose of it properly', 'Put used wipes and cotton in a closed container and follow your state rules for disposing of chemicals. Do not leave open product or soaked wipes out overnight.', 'Cleanup'),
      sF('Make it routine', 'Check your ventilation every day and read the label on any new product before you use it.')
    ]}
  ],
  braid: [
    { id:'b-consult', name:'Consultation & Scalp Check', category:'braid', steps:[
      sC('Ask about goals and history', 'Ask about the style, length and how long they want to keep it. Ask about past braiding, scalp tenderness, hair loss and whether styles have been painful before.'),
      sC('Ask about allergies', 'Ask about allergies to hair products or braiding hair, including the finish or coating on synthetic extensions.', 'Health'),
      sT('Look at the scalp and hair', 'Part a few sections and check for redness, sores, flaking, bumps, thinning or broken edges, and how strong the hair is.', 'Check'),
      sT('Agree on the plan', 'Explain the style, how long it will take, the price and how long it should stay in. Tell the client to say right away if anything feels too tight.', 'Consultation'),
      sF('Record it', 'Note allergies, scalp concerns and what you agreed.')
    ]},
    { id:'b-tension', name:'Tension & Hair Health', category:'braid', steps:[
      sS('Check tension as you go', 'A style should not hurt. Ask regularly how it feels, and watch the client’s face. Pain, small bumps, redness or stinging around the base of the braids means it is too tight.'),
      sT('Go easy on the edges', 'The hairline and temples are the most fragile hair. Use less tension and smaller, lighter extension amounts there.', 'Technique'),
      sT('Keep the weight in check', 'Heavy or long extensions, and very small parts, add pull on the roots. Choose size and weight to fit the client’s hair.', 'Technique'),
      sT('Redo what is too tight', 'If a braid is too tight, take it out and redo it. Do not tell the client it will loosen up.', 'Fix it'),
      sF('Aftercare', 'Tell the client to see you or a doctor if they develop persistent pain, scalp sores or noticeable hair loss, and how to care for the style and scalp while it is in.')
    ]},
    { id:'b-sanitation', name:'Sanitation & Station Setup', category:'braid', steps:[
      sK('Before each client', ['Wash hands with soap and water','Wipe the chair, station and tray with a disinfectant approved for the surface','Fresh towels and cape for every client','Combs, clips and brushes cleaned and disinfected','Extensions and supplies kept sealed and clean'], 'Prep'),
      sM('Respect the contact time', 'Tools must stay in the disinfectant for the full contact time on the label.', 30, 'Per product label'),
      sS('Keep supplies clean', 'Do not put used combs or brushes back into a clean station. Throw away single-use items and any extension hair that touched the floor or a client’s scalp.'),
      sF('Wash up', 'Wash your hands before you start the next client.')
    ]},
    { id:'b-notservice', name:'When Not to Service', category:'braid', steps:[
      sR('Three answers', ['Proceed: nothing in the way','Adapt: avoid the area or change the style','Do not service: send them to a doctor'], 'Every scalp check ends in one of these'),
      sS('Do not service', 'Open sores, signs of infection like pus, swelling or a bad smell, a contagious scalp condition such as head lice or ringworm, and unusual patches of hair loss. Do not braid over it.', 'Skip the service'),
      sS('Adapt', 'Mild flaking, a small irritated spot, or hair that is thin or fragile. Use looser tension, fewer extensions or work around the area.', 'Adapt'),
      sT('Say it kindly', 'Explain that you want the scalp checked first, that you are not able to diagnose it, and that you would be glad to see them again once it has cleared.', 'Client'),
      sF('Record it', 'Write down what you saw and what you told the client. This is a general refresher, not medical advice. Your training and state law come first.')
    ]},
    { id:'b-comfort', name:'Long-Session Care', category:'braid', steps:[
      sT('Plan breaks', 'For long sessions, build in short breaks so the client can stand, stretch, use the restroom and drink water.', 'Plan'),
      sT('Watch posture and head position', 'Check that the client can keep their head and neck in a comfortable position. Use a pillow or a different chair position if their neck gets sore.', 'Comfort'),
      sT('Look after yourself too', 'Change your position often, sit when you can, and take a moment to stretch your hands, wrists and back between sections.', 'You'),
      sF('Check in at the end', 'Before they leave, ask how the scalp feels and tell them what to do if the style feels too tight overnight.')
    ]}
  ],
  esth: [
    { id:'e-consult', name:'Skin Consultation & Intake', category:'esth', steps:[
      sC('Goals and history', 'Ask what they want to improve and what they currently use on their skin, including prescription creams and recent treatments.'),
      sC('Medications and skin treatments', 'Ask about medications, especially isotretinoin or other strong prescription skin medicines, blood thinners, and recent peels, lasers, waxing, injections or sun exposure.', 'Health'),
      sC('Allergies', 'Ask about allergies and past reactions to skin products, fragrance, latex, nuts and essential oils.', 'Health'),
      sT('Look at the skin', 'Check the skin under good light for redness, breakouts, irritation, sunburn, open areas and anything unusual such as a mole that has changed.', 'Skin analysis'),
      sF('Consent and record', 'Have the client read and sign the intake form. Record what you found and the plan, and follow your state’s record-keeping rules.')
    ]},
    { id:'e-contra', name:'Contraindications: Proceed, Adapt, Refer', category:'esth', steps:[
      sR('Three answers', ['Proceed: nothing in the way','Adapt: change the treatment or the area, or get a doctor’s clearance first','Postpone or refer: no treatment today'], 'Every screening ends in one of these'),
      sS('Usually skip the treatment today', 'Active skin infection or an unexplained rash, fever or contagious illness, severe sunburn, recent surgery or injections that are still healing, and open or irritated skin in the treatment area.', 'Postpone'),
      sS('Adapt', 'Sensitive or reactive skin, pregnancy, recent waxing or peels, and medications such as isotretinoin or strong prescription retinoids that make skin fragile. Use gentler products, skip waxing, peels and harsh exfoliation, and ask the client’s doctor when unsure.', 'Usually adapt'),
      sS('Avoid just the area', 'Do not treat over unexpected moles, rashes, cold sores or broken skin. The rest of the skin can often be treated.', 'Local'),
      sS('Send to a doctor', 'A mole that is changing, a sore that will not heal, or sudden swelling or rash. Do not treat it, and recommend medical care.', 'Red flag'),
      sF('Document your decision', 'Write down what you decided and what you told the client. This is a general refresher, not medical advice. Your training and state law come first.')
    ]},
    { id:'e-sanitation', name:'Sanitation & Room Setup', category:'esth', steps:[
      sK('Before each client', ['Wash hands with soap and water','Fresh linens, towels and a clean headband for every client','Wipe the bed, stool and trolley with a disinfectant approved for the surface','Products in pump bottles or dispensed with a clean spatula, never with fingers','Single-use items like sponges, spatulas and disposable applicators out'], 'Prep'),
      sS('Single-use items stay single-use', 'Throw away disposable items, wax sticks and anything that cannot be disinfected after one use. Never double-dip into wax or cream.'),
      sT('Clean, then disinfect tools', 'Wash tools with soap and water, rinse, then fully submerge in an EPA-registered disinfectant.', 'Technique'),
      sM('Respect the contact time', 'Tools must stay submerged for the full contact time on the label.', 30, 'Per product label'),
      sF('Wash up', 'Wash your hands again before you greet the next client.')
    ]},
    { id:'e-patch', name:'Patch Test & Reaction Response', category:'esth', steps:[
      sT('When to patch test', 'Patch test before a new product or treatment that is known to cause reactions, or when a client has a history of sensitive skin or allergies.', 'When'),
      sT('How to patch test', 'Apply a small amount in a hidden area such as behind the ear or on the inner forearm. Follow the product directions for how long to leave it and whether to wait before the full treatment.', 'How'),
      sS('Read the result', 'Redness, itching, swelling, blisters or hives mean do not use that product on the client. Note it in their record.', 'Result'),
      sS('If a reaction happens', 'Stop right away, remove the product with cool water, and soothe the area. Seek medical care for blistering, severe swelling or pain. For trouble breathing or swelling of the face or throat, call emergency services.', 'Reaction'),
      sF('Document it', 'Record what happened, what you did and what you told the client.')
    ]}
  ],
  mua: [
    { id:'m-consult', name:'Consultation & Allergy Check', category:'mua', steps:[
      sC('Goals and look', 'Ask about the occasion, the look they want, how long it needs to last and any photos they like.'),
      sC('Allergies and sensitivities', 'Ask about allergies to cosmetics, fragrance, latex, adhesives, nuts and dyes, and about any past reactions.', 'Health'),
      sC('Skin and eye health', 'Ask about current skin treatments and eye conditions, and whether they wear contact lenses.', 'Health'),
      sT('Patch test when needed', 'For a client with a history of reactions, or when using a new product, test a small amount on the inner forearm first and follow the product directions on how long to wait.', 'Check'),
      sF('Record it', 'Write down allergies, products used and anything the client asked to avoid.')
    ]},
    { id:'m-kit', name:'Kit Sanitation & Hygiene', category:'mua', steps:[
      sK('Before each client', ['Wash hands with soap and water, or use sanitizer','Wipe your station with a disinfectant approved for the surface','Clean brushes and tools ready','Disposable applicators, sponges and mascara wands on hand','Products on a clean palette or tray'], 'Prep'),
      sS('Never double-dip', 'Use a clean spatula to take product from a pot, and put it on a clean palette. Never put a used brush, wand or finger back in the container. Mascara and lip products are single-use applicators only.'),
      sT('Keep it clean', 'Wipe hard products such as pressed powders and pencils with a sanitizing spray that your state board allows, and shave or sharpen pencils for each client.', 'Technique'),
      sT('Clean your brushes', 'Wash brushes with brush cleaner or soap, rinse, reshape and let them dry fully. Clean them between clients when you can, and disinfect them according to your state board rules.', 'Tools'),
      sF('Wash up', 'Wash your hands before and after every client.')
    ]},
    { id:'m-eye', name:'When Not to Apply', category:'mua', steps:[
      sR('Three answers', ['Proceed: nothing in the way','Adapt: avoid the area','Do not apply: send them to a doctor'], 'Every check ends in one of these'),
      sS('Do not apply', 'Redness, swelling, discharge or crusting around the eyes, a stye, signs of pink eye, cold sores or open skin on the lips, and any skin infection in the area.', 'Skip the service'),
      sS('Adapt', 'Mild irritation or a breakout. Work around the area, use gentle products and keep the pressure light.', 'Adapt'),
      sT('Say it kindly', 'Explain that you want to protect them from making it worse, that you are not able to diagnose it, and offer to reschedule once it has cleared.', 'Client'),
      sF('Record it', 'Write down what you saw and what you told the client. This is a general refresher, not medical advice. Your training and state law come first.')
    ]},
    { id:'m-reaction', name:'Reaction Response', category:'mua', steps:[
      sS('Stop and remove', 'Stop right away and take off the product with a clean, damp cloth or a gentle remover.', 'Step 1'),
      sS('Cool and comfort', 'Rinse with cool water and let the skin rest. Do not apply more product to irritated skin.', 'Step 2'),
      sS('Eyes', 'If product gets in the eyes, rinse with plenty of clean water for at least 15 minutes, and get medical care if pain, redness or blurry vision continue.', 'Step 3'),
      sS('When to get help', 'Blistering, severe swelling or pain, or any trouble breathing or swelling of the face or throat. Call emergency services in those cases.', 'Step 4'),
      sF('Document it', 'Record what happened, which products were used and what you told the client. Keep the product packaging in case a doctor asks.')
    ]}
  ],
  safety: [
    { id:'c-consult', name:'Consultation & Allergy Check', category:'safety', crafts:['Cosmetologist'], steps:[
      sC('Ask about goals and history', 'Ask what service they want and about past chemical services, color, relaxers, perms or bleach in the last several months. Ask about hair loss or scalp problems.'),
      sC('Ask about allergies and reactions', 'Ask about allergies to hair color, bleach, fragrance, latex or other products, and about any past reaction at a salon or at home.', 'Health'),
      sT('Patch test when the product calls for one', 'Hair color and some other products require a skin patch test before use. Follow the manufacturer’s directions for where to apply and how long to wait, often 24 to 48 hours. Do not do the service if there is a reaction.', 'Check'),
      sT('Explain the service', 'Tell the client what you will do, how long it will take, the price and what to expect, and have them tell you right away if anything burns or itches.', 'Consultation'),
      sF('Record it', 'Write down allergies, the formula, the patch test result and what you agreed. Follow your state’s record-keeping rules.')
    ]},
    { id:'c-sanitation', name:'Sanitation & Station Setup', category:'safety', crafts:['Cosmetologist'], steps:[
      sK('Before each client', ['Wash hands with soap and water','Wipe the chair, station and tray with a disinfectant approved for the surface','Clean cape, towels and neck strip for every client','Combs, brushes, clips and shears cleaned and disinfected','Single-use items like gloves, foils and applicators ready'], 'Prep'),
      sT('Clean, then disinfect', 'Remove hair and product from tools, wash with soap and water, rinse, then fully submerge in an EPA-registered disinfectant. Porous items like foam files and cloth cannot be disinfected, so replace them.', 'Technique'),
      sM('Respect the contact time', 'Tools must stay submerged for the full contact time on the label.', 30, 'Per product label'),
      sS('Keep used and clean apart', 'Store used tools in a marked container and clean tools in a closed, covered one.'),
      sF('Wash up', 'Wash your hands before you start with the next client.')
    ]},
    { id:'c-scalp', name:'Scalp & Skin Check: Service, Adapt or Refer', category:'safety', crafts:['Cosmetologist'], steps:[
      sR('Three answers', ['Proceed: nothing in the way','Adapt: change the service or avoid the area','Do not service: send them to a doctor'], 'Every check ends in one of these'),
      sT('Look at the scalp and skin', 'Check the scalp, hairline, ears and neck for redness, sores, cuts, scabs, flaking, bumps, scratches or parasites.', 'Check'),
      sS('Do not service', 'Open sores or cuts, signs of infection such as pus or swelling, a contagious condition such as head lice, ringworm or scabies, and severe irritation. Chemical services are never done on irritated or broken skin.', 'Skip the service'),
      sS('Adapt', 'Mild dryness or flaking, a small irritated area, or damaged hair. Choose gentler products, skip the chemical service, or work around the area.', 'Adapt'),
      sT('Say it kindly', 'Explain that you want the scalp checked first, that you cannot diagnose it, and that you would be glad to see them once it has cleared.', 'Client'),
      sF('Record it', 'Write down what you saw and what you told the client. This is a general refresher, not medical advice. Your training and state law come first.')
    ]},
    { id:'c-reaction', name:'Reaction or Chemical Burn: What to Do', category:'safety', crafts:['Cosmetologist'], steps:[
      sS('Stop and rinse', 'Stop the service right away. Rinse the product off with plenty of lukewarm water until it is all gone.', 'Step 1'),
      sS('Keep rinsing a burn', 'If the skin is burning or blistering, keep flushing with cool running water for about 20 minutes.', 'Step 2'),
      sS('Eyes', 'If product gets in the eyes, rinse with plenty of clean water for at least 15 minutes and get medical care.', 'Step 3'),
      sT('Calm the client', 'Stay calm, explain what you are doing, and do not put anything else on the skin.', 'Step 4'),
      sS('Get medical care', 'Blisters, severe pain, burns over a large area, swelling of the face, or any trouble breathing need medical help. Call emergency services if needed.', 'Step 5'),
      sF('Document it', 'Record the products used, what happened and what you told the client. Keep the packaging in case a doctor asks.')
    ]},
    { id:'exposure-incident', name:'Exposure Incident (Blood Spill)', category:'safety', source:'Milady Standard Barbering, 7th Ed.', steps:[
      {kind:'reference', badge:'kind-safety', label:'Materials needed', title:'Have these ready at every station', items:['Antiseptic','Bandages','Cotton','Disposable gloves','Disposable paper towels','Liquid soap','Plastic bag (ziplock)']},
      {kind:'safety', badge:'kind-safety', label:'Step 1', title:'Stop the service', body:'STOP the service immediately.'},
      {kind:'safety', badge:'kind-safety', label:'Step 2', title:'Secure the blade', body:'Dispose of the blade in a sharps container and place the razor in a container designated for cleaning and disinfection.'},
      {kind:'safety', badge:'kind-safety', label:'Step 3', title:'Reassure your client', body:'Face your client and calmly apologize for the incident.'},
      {kind:'safety', badge:'kind-safety', label:'Step 4', title:'Wash your hands', body:'Excuse yourself to go wash your hands.'},
      {kind:'safety', badge:'kind-safety', label:'Step 5', title:'Glove up', body:'Once your hands are clean, immediately put on gloves.'},
      {kind:'safety', badge:'kind-safety', label:'Step 6', title:'Stop the bleeding', body:'Apply slight pressure to the area with a moistened cotton round to stop the bleeding.'},
      {kind:'safety', badge:'kind-safety', label:'Step 7', title:'Dispose of the cotton round', body:'Dispose of the used cotton round in a plastic storage bag.'},
      {kind:'safety', badge:'kind-safety', label:'Step 8', title:'Clean the area', body:'Then gently clean with an antiseptic and have the client wash the area if appropriate.'},
      {kind:'safety', badge:'kind-safety', label:'Step 9', title:'Dispose of the antiseptic wipe', body:'Dispose of the antiseptic wipe in the plastic storage bag.'},
      {kind:'safety', badge:'kind-safety', label:'Step 10', title:'Apply styptic powder', body:'Dispense styptic powder onto a cotton round and use a cotton swab to apply it to the injury to stop any residual bleeding.'},
      {kind:'safety', badge:'kind-safety', label:'Step 11', title:'Bandage the wound', body:'Apply an adhesive bandage to completely cover the wound.'},
      {kind:'safety', badge:'kind-safety', label:'Step 12', title:'Clean the workstation', body:'Clean and disinfect the workstation, as necessary.'},
      {kind:'safety', badge:'kind-safety', label:'Step 13', title:'Dispose of contaminated items', body:'Discard all single-use, contaminated objects such as wipes or cotton balls in a plastic bag and then in a trash bag. Deposit sharp disposables in a sharps box. Dispose of double-bagged items and sharps containers as required by state or local law. Information on these laws may be found on your local board website or through the OSHA website. In general, all of these items (except sharps) may go into the regular trash.'},
      {kind:'timer', badge:'kind-safety', label:'Step 14a', title:'Disinfect tools & implements', body:'Before you remove your gloves, thoroughly clean all tools and implements that came in contact with blood or other body fluids, and completely immerse them in an EPA-registered hospital disinfectant solution.', seconds:60, real:'10 min'},
      {kind:'safety', badge:'kind-safety', label:'Step 14b', title:'Remove your gloves safely', body:"Blood may carry pathogens, so never touch an open sore or a wound. Remove one glove by holding it in your other gloved hand, sliding a finger under the glove at its base, and pulling it over the other contaminated glove, never allowing either glove to come into contact with your skin."},
      {kind:'safety', badge:'kind-safety', label:'Step 15', title:'Wash up & follow up', body:'Wash your hands with soap and warm water before returning to the service. Recommend that the client see a physician if any signs of redness, swelling, pain, or irritation develop.'}
    ]}
  ]
};
})();
