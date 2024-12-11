import { Card } from "./Card";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export function Statistics() {
  const account = useAccount();

  const { data: totalStaking } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getTotalStakedAmount",
  }) as { data: bigint };

  const { data: totalUsers } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getTotalLockedUsers",
  });

  const { data: totalRewards } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getLifetimeRewards",
    args: [account.address],
  });

  const { data: rewardTokenSymbol } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "symbol",
  });

  const cards = [
    {
      title: "Total Value Locked on STAKING",
      value: `${totalStaking ? formatEther(totalStaking) : 0}`,
      className: "blue",
    },
    {
      title: "Total Users",
      value: `${totalUsers}`,
      className: "blue",
    },
    {
      title: "Lifetime Rewards",
      value: `${totalRewards ? totalRewards : 0} ${rewardTokenSymbol}`,
      className: "green",
    },
  ];

  return (
    <div className="flex flex-wrap items-center">
      <div className="flex flex-wrap items-center rounded-2xl w-full">
        <Card cards={cards} />
      </div>
    </div>
  );
}
