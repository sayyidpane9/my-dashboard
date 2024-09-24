// "use server";
// import { prisma } from "@/lib/prisma";
// import { EmployeeType } from "@/type/employee.type";
// import { Prisma } from "@prisma/client";
// import { revalidatePath } from "next/cache";

// export const InsertImportedData = async (data: EmployeeType[]) => {
//   console.log(data);

//   let newData = 0;
//   let updatedData = 0;
//   const stored = data.map(async (e) => {
//     const em = await prisma.employee.findUnique({
//       where: { nrp: e.nrp.toString() },
//     });
//     if (!em) {
//       const newEm: Prisma.employeeUncheckedCreateInput = {
//         nrp: e.nrp.toString(),
//         name: e.fullname,
//         position: e.position,
//         point_of_hire: e.poh,
//         religion: e.religious,
//         contract: e.contract,
//         sub_group: e.subgroup,
//         sub_area: e.subarea,
//         birth: null,
//         birth_place: e.birth_place,
//         identity_number: e.identity_number,
//         gender: e.gender,
//         age: e.age,
//         email: e.email,
//         secondary_email: e.email_secondary,
//         join_date: null,
//       };
//       const store = await prisma.employee.create({
//         data: newEm,
//       });
//       newData += 1;
//     } else {
//       const updateEm: Prisma.employeeUncheckedCreateInput = {
//         name: e.fullname,
//         position: e.position,
//         point_of_hire: e.poh,
//         religion: e.religious,
//         contract: e.contract,
//         sub_group: e.subgroup,
//         sub_area: e.subarea,
//         birth: null,
//         birth_place: e.birth_place,
//         identity_number: e.identity_number,
//         gender: e.gender,
//         age: e.age,
//         email: e.email,
//         secondary_email: e.email_secondary,
//         join_date: null,
//       };
//       const update = await prisma.employee.update({
//         where: { nrp: e.nrp.toString() },
//         data: updateEm,
//       });
//       updatedData += 1;
//     }
//   });

//   await Promise.all(stored);
//   revalidatePath("/employee");
//   return {
//     success: true,
//     message: `success import data, new data = ${newData} and updated data = ${updatedData}`,
//   };
// };
