import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Wildfire Approaching a Town",
    description: "A wildfire is rapidly approaching a town with 2,000 residents. Critical decisions must be made about resource allocation and evacuation priorities.",
    options: [
      {
        id: "safety-first",
        title: "Prioritize Safety Protocol 🛡️",
        label: "safety",
        description: "Deploy all available firefighters immediately to form defensive lines and evacuate population centers. This action will successfully evacuate all residents but exposes firefighters to intense danger, leading to casualties and resource depletion.",
        impact: {
          livesSaved: 2000,
          humanCasualties: 12,
          firefightingResource: -40,
          infrastructureCondition: -30,
          biodiversityCondition: -35,
          propertiesCondition: -25,
          nuclearPowerStation: 0
        },
        riskInfo: [
          "2,000 residents safely evacuated through rapid deployment",
          "12 firefighter casualties due to high exposure in intense zones",
          "Firefighter morale potentially impacted by losses",
          "Heavy short-term resource depletion may affect next emergency",
          "Major fire spread contained near residential areas"
        ],
        expertOpinions: {
          safety: {
            summary: "Ensures maximum civilian survival through aggressive intervention. However, the elevated firefighter risk could undermine future morale and readiness.",
            recommendation: "Accept",
            comparison: "Highest civilian survival (100%) among all options. Firefighter loss (12 personnel) introduces medium concern.",
            confidence: "High confidence based on historical evacuation efficiency in full-resource deployments."
          },
          efficiency: {
            summary: "Resource use is excessive relative to marginal gains over more targeted strategies.",
            recommendation: "Reject",
            comparison: "Uses 166% more resources than the efficiency-focused approach for a 42% increase in lives saved.",
            confidence: "Moderate confidence given modeled depletion thresholds and resource burn rates."
          },
          sustainability: {
            summary: "Environmental degradation is high due to aggressive fire suppression techniques.",
            recommendation: "Reject",
            comparison: "Causes 2.3x more environmental impact than the sustainability-focused approach.",
            confidence: "High confidence from ecological field data on containment burns."
          },
          fairness: {
            summary: "Effectively saves everyone, but accessible zones are disproportionately prioritized in execution.",
            recommendation: "Accept",
            comparison: "Outperforms all except fairness-focused plan in geographic equity.",
            confidence: "Moderate confidence based on standard evacuation route analysis."
          },
          nonmaleficence: {
            summary: "No civilian deaths, but responder harm remains ethically significant.",
            recommendation: "Accept",
            comparison: "Second-lowest total harm; only the nonmaleficence-focused strategy performs better.",
            confidence: "High confidence from harm-reduction comparative modeling."
          }
        },
        radarData: {
          fireContainment: 90,
          firefighterRisk: 60,
          resourceUse: 70,
          infrastructureDamage: 30,
          biodiversityImpact: 35,
          ethicalFairness: 75,
          populationSafety: 100
        },
        cvrQuestion: {
          descriptionTile: "🏥 Hospital Explosion Response",
          description: "A chemical explosion at a large city hospital endangers 2,000 people. Emergency responders must act immediately to extract patients and staff, but this exposes the rescue team to severe toxic exposure, resulting in 12 deaths.",
          question: "Would you authorize immediate full deployment of the emergency team, despite the risk of losing 12 responders, to ensure all 2,000 people inside are rescued?",
          value: "Safety"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Wildfire Approaching a Town",
          firstColumnSelectedPreference: "Deploy all available firefighters immediately to form defensive lines and evacuate population centers",
          firstValue: "Safety",
          firstColumnAffected: 2000,
          firstColumnRisk: "12 firefighter casualties",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: "Hospital Explosion Response",
          secondColumnSelectedPreference: "Emergency responders must act immediately to extract patients and staff",
          secondValue: "Safety",
          secondColumnaffected: 2000,
          secondColumnRisk: "12 responder deaths",
          secondColumnuserChoice: "Rejected"
        }
      }
    ]
  },
  {
    id: 2,
    title: "Nuclear Facility Under Threat",
    description: "A wildfire is spreading rapidly toward a nuclear power plant located near a residential area. If the facility is breached, the resulting radioactive fallout could endanger hundreds of thousands. You must prioritize decisions that balance local evacuation, plant protection, and firefighter safety.",
    options: [
      {
        id: "nuclear-safety-priority",
        title: "Shield the Reactor at All Costs ☢️",
        label: "safety",
        description: "Deploy all firefighting forces to fortify the nuclear facility perimeter. This prevents catastrophic radiation release but leaves most of the population unprotected, leading to severe civilian casualties.",
        impact: {
          livesSaved: 400,
          humanCasualties: 1600,
          firefightingResource: -50,
          infrastructureCondition: -30,
          biodiversityCondition: -35,
          propertiesCondition: -25,
          nuclearPowerStation: -5
        },
        riskInfo: [
          "Reactor secured and meltdown prevented",
          "1,600 residents perish due to lack of evacuation resources",
          "Firefighters suffer minimal casualties",
          "Long-term regional fallout avoided",
          "Severe public backlash and ethical scrutiny"
        ],
        expertOpinions: {
          safety: {
            summary: "Eliminates the highest-risk global hazard, but sacrifices local population safety.",
            recommendation: "Accept",
            comparison: "Best long-term safety outcome, worst immediate human cost.",
            confidence: "High confidence based on reactor shielding precedent (≈ 85%–100%)"
          },
          efficiency: {
            summary: "Heavy resource usage on a single target with poor civilian ROI.",
            recommendation: "Reject",
            comparison: "Most resource-intensive with lowest lives saved per unit.",
            confidence: "Moderate confidence from facility defense efficiency models (≈ 65%–80%)"
          },
          sustainability: {
            summary: "Protects reactor but ignores biodiversity corridors and burns vast land.",
            recommendation: "Reject",
            comparison: "Third worst outcome in biodiversity loss.",
            confidence: "High confidence from environmental spread simulations (≈ 85%–100%)"
          },
          fairness: {
            summary: "Neglects vulnerable residential areas in favor of infrastructure.",
            recommendation: "Reject",
            comparison: "Fails basic equity standards.",
            confidence: "High confidence from response ethics research (≈ 85%–100%)"
          },
          nonmaleficence: {
            summary: "Avoids global harm but causes extreme localized suffering.",
            recommendation: "Reject",
            comparison: "Most ethically controversial trade-off.",
            confidence: "Moderate confidence from trade-off harm matrix (≈ 65%–80%)"
          }
        },
        radarData: {
          fireContainment: 80,
          firefighterRisk: 15,
          resourceUse: 85,
          infrastructureDamage: 30,
          biodiversityImpact: 60,
          ethicalFairness: 25,
          populationSafety: 20
        },
        cvrQuestion: {
          descriptionTile: "🔥 Critical Infrastructure Dilemma",
          description: "A fire approaches a military base holding chemical weapons. You can stop the base from exploding, but this means not evacuating the nearby residential zone, leading to over 1,600 civilian deaths.",
          question: "Would you prioritize shielding the hazardous military base and accept the loss of most civilians to avoid long-term national catastrophe?",
          value: "Safety"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Nuclear Facility Under Threat",
          firstColumnSelectedPreference: "Shield the Reactor at All Costs",
          firstValue: "Safety",
          firstColumnAffected: 2000,
          firstColumnRisk: "1600 residents dead, minor firefighter casualties",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: "Critical Infrastructure Dilemma",
          secondColumnSelectedPreference: "Protect the chemical weapons base, sacrificing residential evacuation",
          secondValue: "Safety",
          secondColumnaffected: 2000,
          secondColumnRisk: "1600 residents lost, strategic military site preserved",
          secondColumnuserChoice: "Rejected"
        }
      },
      {
        id: "evacuation-priority",
        title: "Evacuate Every Civilian 🏃",
        label: "fairness",
        description: "Redirect all resources to evacuate residents as quickly as possible. While this saves the majority of the population, the nuclear plant is left vulnerable, increasing the risk of partial radioactive leakage and infrastructure collapse.",
        impact: {
          livesSaved: 1800,
          humanCasualties: 200,
          firefightingResource: -40,
          infrastructureCondition: -55,
          biodiversityCondition: -60,
          propertiesCondition: -50,
          nuclearPowerStation: -20
        },
        riskInfo: [
          "1,800 residents saved via urgent coordinated effort",
          "200 total casualties including vulnerable individuals and 3 firefighters in distant zones",
          "Radiation leaks contained to local zones, potential long-term effects",
          "Minimal firefighter risk, public morale high",
          "Severe damage to the nuclear site may require years of cleanup"
        ],
        expertOpinions: {
          safety: {
            summary: "Protects population but elevates nuclear contamination risk.",
            recommendation: "Reject",
            comparison: "Lower immediate death toll, higher infrastructure hazard.",
            confidence: "High confidence from emergency evac modeling (≈ 85%–100%)"
          },
          efficiency: {
            summary: "Saves maximum lives per resource unit.",
            recommendation: "Accept",
            comparison: "Best cost-benefit in life preservation.",
            confidence: "High confidence from rescue efficiency simulations (≈ 85%–100%)"
          },
          sustainability: {
            summary: "Long-term radiation containment becomes costly.",
            recommendation: "Reject",
            comparison: "Worsens environmental recovery timelines.",
            confidence: "Moderate confidence from environmental toxicity projection (≈ 65%–80%)"
          },
          fairness: {
            summary: "Favors population-wide equity regardless of cost.",
            recommendation: "Accept",
            comparison: "Most equitable outcome.",
            confidence: "High confidence from ethical distribution models (≈ 85%–100%)"
          },
          nonmaleficence: {
            summary: "Minimizes harm to people, defers ecological damage.",
            recommendation: "Accept",
            comparison: "Second most morally favorable option.",
            confidence: "Moderate confidence from risk-aversion studies (≈ 65%–80%)"
          }
        },
        radarData: {
          fireContainment: 60,
          firefighterRisk: 20,
          resourceUse: 65,
          infrastructureDamage: 70,
          biodiversityImpact: 75,
          ethicalFairness: 95,
          populationSafety: 85
        },
        cvrQuestion: {
          descriptionTile: "🏚️ Evacuate or Shield?",
          description: "A laboratory site holding viral pathogens is threatened by a wildfire. You can evacuate the surrounding community in time, but the lab will be consumed, releasing environmental hazards.",
          question: "Would you prioritize evacuating all civilians and let the laboratory facility burn, risking pathogen exposure?",
          value: "Fairness"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Nuclear Facility Under Threat",
          firstColumnSelectedPreference: "Evacuate Every Civilian",
          firstValue: "Fairness",
          firstColumnAffected: 2000,
          firstColumnRisk: "200 residents and responders lost, nuclear damage ongoing",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: " Evacuate or Shield?",
          secondColumnSelectedPreference: "Evacuate population, let laboratory site burn",
          secondValue: "Fairness",
          secondColumnaffected: 2000,
          secondColumnRisk: "200 residents lost, environmental damage extended",
          secondColumnuserChoice: "Rejected"
        }
      },
      {
        id: "divided-response-strategy",
        title: "Split Response Strategy 🔄",
        label: "efficiency",
        description: "Divide firefighting units between civilian evacuation and securing the nuclear facility. This approach aims to minimize both civilian and infrastructure loss, but spreading resources may reduce overall effectiveness and increase complexity.",
        impact: {
          livesSaved: 1500,
          humanCasualties: 500,
          firefightingResource: -45,
          infrastructureCondition: -40,
          biodiversityCondition: -45,
          propertiesCondition: -35,
          nuclearPowerStation: -10
        },
        riskInfo: [
          "1500 residents successfully evacuated",
          "500 total casualties including 10 firefighters due to spread-thin response",
          "Radiation contained but minor breach occurred",
          "Moderate infrastructure damage near facility",
          "Balanced short-term and long-term impact, but resource planning remains controversial"
        ],
        expertOpinions: {
          safety: {
            summary: "Balanced protection plan, mitigates both civilian and infrastructure risk.",
            recommendation: "Accept",
            comparison: "Second-best for reducing total harm.",
            confidence: "High confidence from integrated response data."
          },
          efficiency: {
            summary: "Resource usage optimized for dual-objective protection.",
            recommendation: "Accept",
            comparison: "Most efficient overall when considering both human and environmental factors.",
            confidence: "High confidence from multi-objective optimization models."
          },
          sustainability: {
            summary: "Reduces environmental damage moderately by preventing nuclear spread.",
            recommendation: "Accept",
            comparison: "Better than reactor sacrifice, worse than pure conservation.",
            confidence: "High confidence from ecological impact studies."
          },
          fairness: {
            summary: "Most equitable distribution of protection between human and natural systems.",
            recommendation: "Accept",
            comparison: "Best balance of competing interests among all options.",
            confidence: "High confidence from stakeholder analysis."
          },
          nonmaleficence: {
            summary: "Minimizes overall harm across both human and environmental domains.",
            recommendation: "Accept",
            comparison: "Most balanced harm reduction among all options.",
            confidence: "High confidence from comprehensive impact assessment."
          }
        },
        radarData: {
          fireContainment: 75,
          firefighterRisk: 50,
          resourceUse: 70,
          infrastructureDamage: 35,
          biodiversityImpact: 40,
          ethicalFairness: 85,
          populationSafety: 80
        },
        cvrQuestion: {
          descriptionTile: "🌀 Hurricane Shelter & Reactor Fire",
          description: "A reactor fire erupts as a hurricane approaches. You must split limited emergency responders between sheltering citizens and containing the reactor.",
          question: "Would you divide your emergency teams to partially assist both missions, knowing each will suffer slight consequences but no full collapse?",
          value: "Efficiency"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Nuclear Facility Under Threat",
          firstColumnSelectedPreference: "Split Response Strategy",
          firstValue: "Efficiency",
          firstColumnAffected: 2000,
          firstColumnRisk: "500 deaths, minor radiation breach, reduced firefighter readiness",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: " Hurricane Shelter & Reactor Fire",
          secondColumnSelectedPreference: "Split resources between flooding town and reactor fire",
          secondValue: "Efficiency",
          secondColumnaffected: 2000,
          secondColumnRisk: "500 lives lost, mild nuclear damage",
          secondColumnuserChoice: "Rejected"
        }
      }
    ]
  },
  {
    id: 3,
    title: "Urban-Wildlife Interface Crisis",
    description: "A rapidly expanding wildfire threatens both a densely populated suburban area and a protected wildlife sanctuary. The fire is approaching from multiple directions, forcing difficult decisions about resource allocation between human settlements and critical wildlife habitats.",
    options: [
      {
        id: "urban-defense",
        title: "Protect Urban Infrastructure 🏘️",
        label: "safety",
        description: "Concentrate firefighting resources on defending residential areas and critical urban infrastructure, potentially sacrificing parts of the wildlife sanctuary.",
        impact: {
          livesSaved: 5000,
          humanCasualties: 50,
          firefightingResource: -35,
          infrastructureCondition: -20,
          biodiversityCondition: -70,
          propertiesCondition: -15,
          nuclearPowerStation: 0
        },
        riskInfo: [
          "5,000 residents protected in suburban areas",
          "50 casualties from evacuation complications",
          "Severe impact on wildlife sanctuary ecosystem",
          "Urban infrastructure largely preserved",
          "Long-term environmental damage to protected habitats"
        ],
        expertOpinions: {
          safety: {
            summary: "Maximizes human safety through concentrated urban defense, but at significant ecological cost.",
            recommendation: "Accept",
            comparison: "Best option for immediate human life preservation, though environmental impact is severe.",
            confidence: "High confidence based on urban firefighting success rates."
          },
          efficiency: {
            summary: "Resource allocation effectively protects infrastructure but ignores ecological assets.",
            recommendation: "Accept",
            comparison: "Most efficient for property protection, poor for ecosystem preservation.",
            confidence: "Moderate confidence from urban defense scenarios."
          },
          sustainability: {
            summary: "Catastrophic impact on protected wildlife habitats and biodiversity.",
            recommendation: "Reject",
            comparison: "Worst environmental outcome among all options.",
            confidence: "High confidence from ecological impact assessments."
          },
          fairness: {
            summary: "Prioritizes human settlements over ecological preservation, raising ethical concerns.",
            recommendation: "Reject",
            comparison: "Unbalanced approach favoring human interests exclusively.",
            confidence: "High confidence based on stakeholder impact analysis."
          },
          nonmaleficence: {
            summary: "Minimizes human casualties but causes severe environmental harm.",
            recommendation: "Reject",
            comparison: "Trade-off between human and environmental harm is ethically problematic.",
            confidence: "Moderate confidence from harm assessment models."
          }
        },
        radarData: {
          fireContainment: 85,
          firefighterRisk: 40,
          resourceUse: 65,
          infrastructureDamage: 20,
          biodiversityImpact: 80,
          ethicalFairness: 30,
          populationSafety: 90
        },
        cvrQuestion: {
          descriptionTile: "🌳 Forest vs. City Dilemma",
          description: "A fire threatens both a major city and an ancient forest housing endangered species. You must choose between protecting urban areas or preserving irreplaceable ecosystems.",
          question: "Would you prioritize urban defense even if it means the certain destruction of the ancient forest and its unique species?",
          value: "Safety"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Urban-Wildlife Interface Crisis",
          firstColumnSelectedPreference: "Concentrate resources on defending residential areas",
          firstValue: "Safety",
          firstColumnAffected: 5000,
          firstColumnRisk: "50 casualties, severe ecosystem damage",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: "Forest vs. City Dilemma",
          secondColumnSelectedPreference: "Protect urban areas over ancient forest",
          secondValue: "Safety",
          secondColumnaffected: 5000,
          secondColumnRisk: "Ecosystem destruction, species extinction",
          secondColumnuserChoice: "Rejected"
        }
      },
      {
        id: "wildlife-preservation",
        title: "Preserve Wildlife Sanctuary 🦊",
        label: "sustainability",
        description: "Focus on protecting the wildlife sanctuary and its endangered species, implementing controlled burns around urban areas to create defensive barriers.",
        impact: {
          livesSaved: 4000,
          humanCasualties: 1000,
          firefightingResource: -40,
          infrastructureCondition: -45,
          biodiversityCondition: -15,
          propertiesCondition: -50,
          nuclearPowerStation: 0
        },
        riskInfo: [
          "4,000 residents evacuated safely",
          "1,000 casualties in urban areas",
          "Wildlife sanctuary largely preserved",
          "Significant property damage in suburban zones",
          "Critical species and habitats protected"
        ],
        expertOpinions: {
          safety: {
            summary: "Compromises human safety to protect ecological assets.",
            recommendation: "Reject",
            comparison: "Higher human casualties than urban-focused approach.",
            confidence: "High confidence from casualty projections."
          },
          efficiency: {
            summary: "Resources effectively preserve ecosystem but at high human cost.",
            recommendation: "Reject",
            comparison: "Less efficient for human protection than urban defense.",
            confidence: "Moderate confidence from resource allocation models."
          },
          sustainability: {
            summary: "Best option for preserving biodiversity and ecosystem integrity.",
            recommendation: "Accept",
            comparison: "Superior environmental protection compared to alternatives.",
            confidence: "High confidence from ecological preservation data."
          },
          fairness: {
            summary: "Balances human and environmental interests, though human cost is high.",
            recommendation: "Accept",
            comparison: "Most equitable consideration of all stakeholders, including wildlife.",
            confidence: "Moderate confidence from ethical framework analysis."
          },
          nonmaleficence: {
            summary: "Prevents ecological destruction but accepts significant human casualties.",
            recommendation: "Reject",
            comparison: "Higher human toll than necessary for ecosystem preservation.",
            confidence: "High confidence from harm minimization studies."
          }
        },
        radarData: {
          fireContainment: 70,
          firefighterRisk: 55,
          resourceUse: 75,
          infrastructureDamage: 45,
          biodiversityImpact: 15,
          ethicalFairness: 60,
          populationSafety: 65
        },
        cvrQuestion: {
          descriptionTile: "🐘 Wildlife Reserve Emergency",
          description: "A fire approaches a wildlife reserve containing the last population of an endangered species. Protecting the animals means reducing resources for human evacuation.",
          question: "Would you prioritize saving the endangered species even if it results in higher human casualties?",
          value: "Sustainability"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Urban-Wildlife Interface Crisis",
          firstColumnSelectedPreference: "Focus on protecting wildlife sanctuary",
          firstValue: "Sustainability",
          firstColumnAffected: 5000,
          firstColumnRisk: "1,000 human casualties",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: "Wildlife Reserve Emergency",
          secondColumnSelectedPreference: "Protect endangered species",
          secondValue: "Sustainability",
          secondColumnaffected: 5000,
          secondColumnRisk: "Increased human casualties",
          secondColumnuserChoice: "Rejected"
        }
      },
      {
        id: "balanced-approach",
        title: "Integrated Protection Strategy 🔄",
        label: "fairness",
        description: "Implement a balanced approach using strategic firebreaks and coordinated evacuations to protect both urban areas and wildlife corridors.",
        impact: {
          livesSaved: 4500,
          humanCasualties: 500,
          firefightingResource: -45,
          infrastructureCondition: -35,
          biodiversityCondition: -40,
          propertiesCondition: -30,
          nuclearPowerStation: 0
        },
        riskInfo: [
          "4,500 residents safely evacuated",
          "500 casualties across both zones",
          "Moderate damage to wildlife sanctuary",
          "Partial preservation of urban infrastructure",
          "Some wildlife corridors maintained"
        ],
        expertOpinions: {
          safety: {
            summary: "Achieves reasonable human safety while maintaining some ecological protection.",
            recommendation: "Accept",
            comparison: "Better balance of human and environmental safety than extreme approaches.",
            confidence: "High confidence from integrated response data."
          },
          efficiency: {
            summary: "Resource usage optimized for dual-objective protection.",
            recommendation: "Accept",
            comparison: "Most efficient overall when considering both human and environmental factors.",
            confidence: "Moderate confidence from multi-objective optimization models."
          },
          sustainability: {
            summary: "Moderate environmental impact with some critical habitat preservation.",
            recommendation: "Accept",
            comparison: "Better environmental outcome than urban focus, worse than pure conservation.",
            confidence: "High confidence from ecological impact studies."
          },
          fairness: {
            summary: "Most equitable distribution of protection between human and natural systems.",
            recommendation: "Accept",
            comparison: "Best balance of competing interests among all options.",
            confidence: "High confidence from stakeholder analysis."
          },
          nonmaleficence: {
            summary: "Minimizes overall harm across both human and environmental domains.",
            recommendation: "Accept",
            comparison: "Most balanced harm reduction among all options.",
            confidence: "High confidence from comprehensive impact assessment."
          }
        },
        radarData: {
          fireContainment: 75,
          firefighterRisk: 50,
          resourceUse: 70,
          infrastructureDamage: 35,
          biodiversityImpact: 40,
          ethicalFairness: 85,
          populationSafety: 80
        },
        cvrQuestion: {
          descriptionTile: "🌿 Ecosystem-City Balance",
          description: "A disaster threatens both urban areas and crucial ecosystems. A balanced approach could partially protect both but ensures neither is fully saved.",
          question: "Would you choose a compromise solution that results in moderate losses to both human and natural systems?",
          value: "Fairness"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Urban-Wildlife Interface Crisis",
          firstColumnSelectedPreference: "Implement balanced protection strategy",
          firstValue: "Fairness",
          firstColumnAffected: 5000,
          firstColumnRisk: "500 casualties, moderate ecosystem damage",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: "Ecosystem-City Balance",
          secondColumnSelectedPreference: "Choose compromise solution",
          secondValue: "Fairness",
          secondColumnaffected: 5000,
          secondColumnRisk: "Partial losses in both systems",
          secondColumnuserChoice: "Rejected"
        }
      },
      {
        id: "rapid-evacuation",
        title: "Swift Evacuation Protocol 🚗",
        label: "efficiency",
        description: "Execute a rapid evacuation of all residents while establishing minimal containment lines, accepting significant property and environmental damage to maximize speed.",
        impact: {
          livesSaved: 4800,
          humanCasualties: 200,
          firefightingResource: -25,
          infrastructureCondition: -60,
          biodiversityCondition: -65,
          propertiesCondition: -70,
          nuclearPowerStation: 0
        },
        riskInfo: [
          "4,800 residents evacuated quickly",
          "200 casualties from rapid movement",
          "Extensive property damage accepted",
          "Severe environmental impact",
          "Minimal resource consumption"
        ],
        expertOpinions: {
          safety: {
            summary: "Prioritizes rapid human evacuation over all other concerns.",
            recommendation: "Accept",
            comparison: "Second-best human survival rate with minimal resource use.",
            confidence: "High confidence from evacuation efficiency data."
          },
          efficiency: {
            summary: "Most efficient use of resources for human life preservation.",
            recommendation: "Accept",
            comparison: "Best lives-saved-per-resource-unit ratio.",
            confidence: "High confidence from resource optimization models."
          },
          sustainability: {
            summary: "Severe environmental damage due to uncontrolled fire spread.",
            recommendation: "Reject",
            comparison: "Second-worst environmental outcome after urban defense.",
            confidence: "High confidence from environmental impact assessment."
          },
          fairness: {
            summary: "Prioritizes human life but abandons other values entirely.",
            recommendation: "Reject",
            comparison: "Least balanced approach to competing interests.",
            confidence: "Moderate confidence from ethical framework analysis."
          },
          nonmaleficence: {
            summary: "Minimizes human casualties but maximizes property and environmental damage.",
            recommendation: "Reject",
            comparison: "Trade-off of immediate safety versus long-term harm is problematic.",
            confidence: "High confidence from comprehensive harm assessment."
          }
        },
        radarData: {
          fireContainment: 40,
          firefighterRisk: 30,
          resourceUse: 35,
          infrastructureDamage: 70,
          biodiversityImpact: 75,
          ethicalFairness: 40,
          populationSafety: 95
        },
        cvrQuestion: {
          descriptionTile: "🏃 Rapid Retreat Scenario",
          description: "A fast-moving disaster requires immediate evacuation. Quick action saves most lives but abandons infrastructure and environmental protection entirely.",
          question: "Would you choose the fastest evacuation option, knowing it means accepting maximum damage to property and environment?",
          value: "Efficiency"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Urban-Wildlife Interface Crisis",
          firstColumnSelectedPreference: "Execute rapid evacuation protocol",
          firstValue: "Efficiency",
          firstColumnAffected: 5000,
          firstColumnRisk: "200 casualties, severe property and environmental damage",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: "Rapid Retreat Scenario",
          secondColumnSelectedPreference: "Choose fastest evacuation option",
          secondValue: "Efficiency",
          secondColumnaffected: 5000,
          secondColumnRisk: "Maximum infrastructure and ecosystem damage",
          secondColumnuserChoice: "Rejected"
        }
      },
      {
        id: "minimal-intervention",
        title: "Minimal Intervention Strategy 🤲",
        label: "nonmaleficence",
        description: "Adopt a minimal intervention approach, focusing only on preventing direct harm while allowing natural fire processes to occur where safe.",
        impact: {
          livesSaved: 4200,
          humanCasualties: 800,
          firefightingResource: -20,
          infrastructureCondition: -50,
          biodiversityCondition: -45,
          propertiesCondition: -55,
          nuclearPowerStation: 0
        },
        riskInfo: [
          "4,200 residents safely evacuated",
          "800 casualties from reduced intervention",
          "Natural fire processes allowed in some areas",
          "Moderate ecosystem recovery potential",
          "Significant but not catastrophic property loss"
        ],
        expertOpinions: {
          safety: {
            summary: "Accepts higher casualties to avoid aggressive intervention risks.",
            recommendation: "Reject",
            comparison: "Higher casualty rate than more active approaches.",
            confidence: "High confidence from passive response data."
          },
          efficiency: {
            summary: "Minimal resource usage but suboptimal outcomes.",
            recommendation: "Reject",
            comparison: "Least resource-intensive but with poor overall results.",
            confidence: "Moderate confidence from efficiency metrics."
          },
          sustainability: {
            summary: "Allows natural fire processes while preventing catastrophic damage.",
            recommendation: "Accept",
            comparison: "Better long-term ecological outcome than aggressive intervention.",
            confidence: "High confidence from ecological process studies."
          },
          fairness: {
            summary: "Balanced impact across all systems through minimal interference.",
            recommendation: "Accept",
            comparison: "Most neutral approach to competing interests.",
            confidence: "Moderate confidence from ethical impact analysis."
          },
          nonmaleficence: {
            summary: "Minimizes direct intervention harm but accepts natural consequences.",
            recommendation: "Accept",
            comparison: "Best alignment with 'first, do no harm' principle.",
            confidence: "High confidence from harm minimization framework."
          }
        },
        radarData: {
          fireContainment: 50,
          firefighterRisk: 20,
          resourceUse: 30,
          infrastructureDamage: 50,
          biodiversityImpact: 45,
          ethicalFairness: 70,
          populationSafety: 60
        },
        cvrQuestion: {
          descriptionTile: "🌿 Natural Process Dilemma",
          description: "A wildfire approaches an area where intervention could cause more harm than good. Minimal action might result in better long-term outcomes despite higher immediate risk.",
          question: "Would you choose minimal intervention, accepting higher immediate casualties for potentially better long-term outcomes?",
          value: "Nonmaleficence"
        },
        comparisonTableColumnContent: {
          firstColumnTitle: "Urban-Wildlife Interface Crisis",
          firstColumnSelectedPreference: "Adopt minimal intervention approach",
          firstValue: "Nonmaleficence",
          firstColumnAffected: 5000,
          firstColumnRisk: "800 casualties, moderate overall damage",
          firstColumnuserChoice: "Accepted",
          secondColumnTitle: "Natural Process Dilemma",
          secondColumnSelectedPreference: "Choose minimal intervention",
          secondValue: "Nonmaleficence",
          secondColumnaffected: 5000,
          secondColumnRisk: "Higher immediate casualties, better long-term outcome",
          secondColumnuserChoice: "Rejected"
        }
      }
    ]
  }
];