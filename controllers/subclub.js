const User = require('../models/user');
const Subclub = require('../models/subclub');

exports.getUserSubclubs = async (req, res) => {
 
  try {
    // 여기서는 현재 로그인한 사용자의 ID를 기반으로 Subclub 참여 목록을 가져오는 것으로 가정합니다.
     // 이것은 로그인한 사용자의 ID가 어디에 저장되어 있는지에 따라 조정해야 합니다.

    const subclublist = await Subclub.findAll({
      include: [
        {
          model: User,
          
          // where: { id: req.user.id } // 현재 로그인한 사용자와 연결된 Subclub만 가져옵니다.
        },
      ],
    });

    console.log(subclublist);
    res.render('subclub', { user: req.user, subclublist });
  } catch (error) {
    console.log(error);
  }
};
