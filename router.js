import  { Router} from "express";
import * as rh from "./requestHandler.js";

const router=Router()
router.route("/addemployee").post(rh.addEmployee)
router.route("/getemployee").get(rh.getEmployee);
router.route("/getemploy/:_id").get(rh.getEmploy);
router.route("/editemployee/:_id").get(rh.editEmployee);
router.route("/updateemployee/:_id").put(rh.updateEmployee);
router.route("/deleteemployee/:_id").delete(rh.deleteEmployee);

export default router;