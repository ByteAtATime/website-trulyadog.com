"use client";

import Link from "next/link";
import type { NextPage } from "next";

const Roadmap: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
              Bark Ruffalo Ecosystem: The Path to Multi-Agentic Dominance
            </h1>

            <div className="space-y-8">
              {/* Achievements Section */}
              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-green-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-base-content dark:text-white">
                    🏆 Already Fetched (Achievements)
                  </h2>
                  <ul className="space-y-2 text-base-content dark:text-white text-sm sm:text-base">
                    <li>✅ Fastest graduation in virtuals.io history with high initial liquidity to deter bots</li>
                    <li>✅ Deployed fair tokenomics: 30% DAO, 5.25% operational, 14.5% team</li>
                    <li>✅ The DAO and operational funds have been getting income since day 1 through LPing</li>
                    <li>✅ Established presence across Twitter, Telegram, Bluesky, Mastodon and Farcaster</li>
                    <li>✅ Enabled token-gated benefits system for stakers through Guild.xyz</li>
                    <li>
                      ✅ Launched{" "}
                      <a
                        href="https://opensea.io/collection/bark-ruffalo/overview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        OG NFT collection
                      </a>{" "}
                      for the most loyal stakers and supporters on social media
                    </li>
                    <li>
                      ✅ Started collaboration programs that should bring future income (see{" "}
                      <Link
                        href="/collaborate"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        Collaborate
                      </Link>
                      )
                    </li>
                    <li>
                      ✅ Launched migration to $mPAWSY to reduce dependency on Virtuals Protocol and eliminate their 1%
                      trade and liquidity add/remove fees
                    </li>
                    <li>✅ Established staking system with reward tracking token</li>
                    <li>✅ Launched website with staking and migration functionality</li>
                    <li>✅ Open-sourced all contracts and website for crypto community use</li>
                    <li>✅ Released advanced app.virtuals.io/prototypes sniper tool for 500k+ and 5M clubs</li>
                    <li>✅ Created multi-agentic AI ecosystem with three instances using various technologies</li>
                  </ul>
                  <p className="text-base-content dark:text-white text-sm sm:text-base">
                    All of this has happened in 25 days.
                  </p>
                </div>
              </div>

              {/* Building the Pack Section */}
              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-base-content dark:text-white">
                    Building the Pack (Current) 🌱
                  </h2>
                  <ul className="space-y-2 text-base-content dark:text-white text-sm sm:text-base">
                    <li>🎯 Expand AI agent capabilities across social platforms</li>
                    <li>🎯 Optimize AI agents&apos; uptime and resilience to hacks or social media bans</li>
                    <li>🎯 Improve multi-agentic interactions</li>
                    <li>
                      🎯 Enable the rewards market (the contract is already live, we need to create the website page)
                    </li>
                    <li>🎯 Launch Discord server with enhanced community features</li>
                    <li>
                      🎯 Create data provider for information on stocks, ETFs, crypto (maybe other AI agents will rent
                      it, thereby gaining us another source of income)
                    </li>
                    <li>🎯 Enhance token-gated benefits (5M club and 5k club both getting something)</li>
                    <li>🎯 Deploy ETH liquidity pool on Base</li>
                    <li>🎯 Deploy arbitrage bot between the pools that the DAO participates in</li>
                    <li>🎯 Continue to distribute rewards manually</li>
                    <li>🎯 Scale marketing efforts through AI-driven strategies</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 Section */}
              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-purple-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-base-content dark:text-white">
                    Phase 2: Territory Expansion 🚀
                  </h2>
                  <ul className="space-y-2 text-base-content dark:text-white text-sm sm:text-base">
                    <li>
                      🎯 Launch an alpha tips system for stakers (aixbt style, but without the dashboard—they&apos;ll be
                      posted first in 5M-club, then 500k, then 5k, then socials)
                    </li>
                    <li>🎯 Implement meme generator tool</li>
                    <li>🎯 Develop automated rewards distribution system</li>
                    <li>🎯 Deploy Solana liquidity pool and bridge</li>
                    <li>🎯 Implement cross-chain functionality</li>
                    <li>🎯 Develop AI-powered market analysis system</li>
                    <li>🎯 Reinforce the current income-generating activities for DAO</li>
                    <li>🎯 Create more income-generating activities for DAO</li>
                    <li>🎯 Establish partnerships with other crypto/AI projects</li>
                    <li>
                      🎯 Hire and onboard marketing pros, devs, meme creators, and AI experts who also stake tokens for
                      skin in the game
                    </li>
                    <li>🎯 Scale multi-agent system with specialized roles</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 Section */}
              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-yellow-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-base-content dark:text-white">
                    Phase 3: Alpha Unleashed 💎
                  </h2>
                  <ul className="space-y-2 text-base-content dark:text-white text-sm sm:text-base">
                    <li>🎯 Launch proprietary AI frameworks and modules</li>
                    <li>🎯 Implement DAO governance system</li>
                    <li>🎯 Create automated income distribution</li>
                    <li>
                      🎯 Introduce 3D Bark Ruffalo character—including live-streamed stunts—to charm the masses (and
                      rake in profits)
                    </li>
                    <li>
                      🎯 Create the Bark Ruffalo foundation and cross our presence into the traditional financial system
                    </li>
                    <li>🎯 Establish even more revenue streams from AI services</li>
                    <li>🎯 Be known for Bark Ruffalo being the most intelligent and knowledgeable AI agent</li>
                    <li>🎯 Scale ecosystem to support 100k+ users</li>
                  </ul>
                </div>
              </div>

              {/* Important Notes Section */}
              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-red-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-base-content dark:text-white">
                    Important Notes
                  </h2>
                  <ul className="space-y-2 text-base-content dark:text-white text-sm sm:text-base">
                    <li>⚠️ We&apos;re in agile startup mode - expect rapid iterations and strategic pivots</li>
                    <li>⚠️ All developments focus on maximizing returns for stakers</li>
                    <li>⚠️ Timelines are flexible and may be adjusted based on market conditions</li>
                    <li>⚠️ New opportunities may reshape priorities</li>
                    <li>⚠️ Community feedback drives development direction</li>
                  </ul>
                </div>
              </div>

              {/* Core Principles Section */}
              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-base-content dark:text-white">
                    Core Principles
                  </h2>
                  <ul className="space-y-2 text-base-content dark:text-white text-sm sm:text-base">
                    <li>🤝 Radical transparency in all operations</li>
                    <li>💰 No operational spending until we surpass $9M market cap</li>
                    <li>🔒 Long-term value creation over short-term gains</li>
                    <li>🧠 Continuous AI agent improvement</li>
                    <li>💪🏻 No new tokens to be launched; other agents created by us will join this ecosystem</li>
                    <li>🌐 Cross-chain expansion and integration</li>
                  </ul>
                </div>
              </div>

              {/* Remember Section */}
              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-pink-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-base-content dark:text-white">Remember</h2>
                  <p className="text-base-content dark:text-white text-sm sm:text-base">
                    🎯 We&apos;re agile AF—if something doesn&apos;t pay, we pivot and make it pay. The end goal: keep
                    that staker money printer humming! Those who sell early might develop PTSD (Poorly Timed Selling
                    Disorder).
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="text-base-content dark:text-white text-sm sm:text-base">
                      <a
                        href="https://x.com/TrulyADog/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        Follow us on X
                      </a>
                    </p>
                    <p className="text-base-content dark:text-white text-sm sm:text-base">
                      <a
                        href="https://t.me/cadogai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        Join our Telegram group
                      </a>
                    </p>
                    <p className="text-base-content dark:text-white text-sm sm:text-base">
                      <a
                        href="https://linktr.ee/TrulyADog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        Explore
                      </a>
                    </p>
                    <p className="text-base-content dark:text-white text-sm sm:text-base font-semibold">
                      Buy $PAWSY. Migrate. Stake. Win.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
