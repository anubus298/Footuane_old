import { Skeleton } from "@mui/material";



export default function SkeletonUnion(props) {
  return <div className="flex flex-col rounded-md first:mt-5 last:mb-5 ">
    <Skeleton animation="wave" height={192}></Skeleton>
    <Skeleton animation="wave" height={192}></Skeleton>
    <Skeleton animation="wave" height={192}></Skeleton>
    <Skeleton animation="wave" height={192}></Skeleton>
    <Skeleton animation="wave" height={192}></Skeleton>
  </div>;
}
  